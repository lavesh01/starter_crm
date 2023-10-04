import * as Yup from 'yup'

import { Field, Form, Formik } from 'formik'
import { FormContainer, FormItem } from '@/components/ui/Form'
import { apiGetCategoryData, apiPostBlogData } from '@/services/BlogService'
import reducer, { fetchBlogs, useAppDispatch, useAppSelector } from './store'
import { useEffect, useState } from 'react'

import Button from '@/components/ui/Button'
import type { FieldProps } from 'formik'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import { injectReducer } from '@/store/';

injectReducer('blog', reducer)

type FormModel = {
    title: string
    description: string
    category: string
}

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title Required'),
    description: Yup.string()
    .min(6, 'Too Short!')
    .required('Description Required'),
    category: Yup.string().required('Please select one!'),
})

const Blog = () => {
    const [ categoryData , setCategoryData ] = useState([]);
    const [ blogs , setBlogs ] = useState([]);
    const ac  = useAppSelector(state => state.blog.data.blogData)
    
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        fetchData()
        fetchCategory()
    },[])

    const fetchData = () => {
        dispatch(fetchBlogs())
    }

    const fetchCategory = async () => {
        const response = await apiGetCategoryData()
        setCategoryData(response.data)
    }
    const options = categoryData.map((category) => ({
        value: category._id,
        label: category.name,
    }));

    const onBlogPost = async (values, setSubmitting) => {
        const response = await apiPostBlogData(values);
        setSubmitting(false);
        
        console.log("response printed");
        console.log(response);
    }

    return (
    <>
        <div>
            <Formik
                initialValues={{
                    title: '',
                    description: '',
                    category: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm, setSubmitting })  => {
                    onBlogPost(values,setSubmitting)
                    resetForm();
                }}
            >
                {({ values,touched, errors, resetForm }) => (
                    <Form>
                        <FormContainer>
                            <FormItem
                                label="Title"
                                invalid={errors.title && touched.title}
                                errorMessage={errors.title}
                            >
                                <Field
                                    type="text"
                                    autoComplete="off"
                                    name="title"
                                    placeholder="Title"
                                    component={Input}
                                />
                            </FormItem>
                            <FormItem
                                label="Description"
                                invalid={errors.description && touched.description}
                                errorMessage={errors.description}
                            >
                                <Field
                                    type="text"
                                    autoComplete="off"
                                    name="description"
                                    placeholder="Description"
                                    component={Input}
                                />
                            </FormItem>
                            <FormItem
                                asterisk
                                label="Category"
                                invalid={errors.category && touched.category}
                                errorMessage={errors.category}
                            >
                                <Field name="category">
                                    {({ field, form }: FieldProps<FormModel>) => (
                                        <Select
                                            field={field}
                                            form={form}
                                            options={options}
                                           
                                            value={options.filter(
                                                (option) =>
                                                    option.value ===
                                                    values.category
                                            )}
                                            onChange={(option) =>
                                                form.setFieldValue(
                                                    field.name,
                                                    option?.value
                                                )
                                            }
                                        />
                                      
                                    )}
                                </Field>
                            </FormItem>

                            
                            <FormItem>
                                <Button
                                    type="reset"
                                    className="ltr:mr-2 rtl:ml-2"
                                    onClick={() => resetForm()}
                                >
                                    Reset
                                </Button>
                                <Button variant="solid" type="submit">
                                    Submit
                                </Button>
                            </FormItem>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </div>


        <div>
          {blogs && blogs?.map((blog) => {
            return (<>
                <div>{blog.name}</div>
            </>)
          })}
        </div>

    </>
    )
}

export default Blog