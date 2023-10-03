import * as Yup from 'yup'

import { Field, Form, Formik } from 'formik'
import { FormContainer, FormItem } from '@/components/ui/Form'
import { apiGetCategoryData, apiPostBlogData } from '@/services/BlogService'
import { useEffect, useState } from 'react'

import Button from '@/components/ui/Button'
import type { FieldProps } from 'formik'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import axios from 'axios'

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

    useEffect(() => {
        fetch("http://localhost:3000/api/blog/category")
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setCategoryData(data);
            console.log(data)
          })
          .catch(error => console.error('Fetch error:', error));
      }, []);

    useEffect(() => {
        fetch("http://localhost:3000/api/blog")
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setBlogs(data);
            console.log(data)
          })
          .catch(error => console.error('Fetch error:', error));
      }, []);

    // useEffect(() => {
    //     const fetchCategory = async () => {
    //         console.log("category funciton entered")
    //         const response = await apiGetCategoryData()
    //         console.log("category funciton exit")
    //         console.log(response);
    //     }

    //     fetchCategory();
        
    //     // axios.get("http://localhost:3000/api/blog/category")
    //     //     .then(res => {
    //     //         console.log("enterend useEffect")
    //     //         setCategoryData(res.data)
    //     //         console.log(res)
    //     //     })
    //     //     .catch(err => console.error(err));
    // },[])
    
    const options = categoryData.map(category => ({
        value: category._id,
        label: category.name
      }));

    // const options = [
    //     { value: '651c0a75da903f0b15029b17', label: 'Technology' },
    //     { value: '651c0b1e01955aba823decf2', label: 'Travel' },
    //     { value: '651c0b1001955aba823decee', label: 'Science' },
    // ]

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
                onSubmit={(values, { resetForm, setSubmitting }) => {

                    // IN APP 
                    // const response = apiPostBlogData(values);
                    // console.log(response);
                    
                    // AXIOS 
                    // axios.post("http://localhost:3000/api/blog",values)
                    //     .then(res => {
                    //         console.log(res.data)
                    //         setSubmitting(false)
                    //         resetForm()
                    //     })
                    //     .catch(error => console.error(error));

                    // FETCH 
                    fetch("http://localhost:3000/api/blog", {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(values)
                    })
                        .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                        })
                        .then(data => {
                            console.log(data);
                            setBlogs(prev => [...prev, data]);
                            setSubmitting(false);
                            resetForm();
                        })
                        .catch(error => console.error('Fetch error:', error));
                    
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
          {blogs?.map((blog) => {
            return (<>
                <div>{blog.title}</div>
            </>)
          })}
        </div>

    </>
    )
}

export default Blog