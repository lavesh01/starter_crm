import CityForm, { CreditCardInfo } from './CityForm'
import { Field, Form, Formik } from 'formik'
import type { FieldInputProps, FieldProps, FormikProps } from 'formik'
import { useEffect, useState } from 'react'

import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import { FormContainer } from '@/components/ui/Form'
import FormDesription from '../common/FormDescription'
import FormRow from '../common/FormRow'
import { HiPlus } from 'react-icons/hi'
import Notification from '@/components/ui/Notification'
import Tag from '@/components/ui/Tag'
import classNames from 'classnames'
import isLastChild from '@/utils/isLastChild'
import toast from '@/components/ui/toast'

// import { apiGetAccountSettingCityData } from '@/services/AccountServices'


type CreditCard = {
    cardId: string
    cardHolderName: string
    cardType: string
    expMonth: string
    expYear: string
    last4Number: string
    primary: boolean
}

type OtherPayemnt = {
    id: string
    identifier: string
    redirect: string
    type: string
}

type Bill = {
    id: string
    item: string
    status: string
    amount: number
    date: number
}

type CityData = {
    paymentMethods: CreditCard[]
    otherMethod: OtherPayemnt[]
}

type CityFormModel = CityData

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

const City = () => {
    const [data, setData] = useState<CityData>({
        paymentMethods: [],
        otherMethod: [],
    })
    const [selectedCard, setSelectedCard] = useState<Partial<CreditCardInfo>>(
        {}
    )
    const [ccDialogType, setCcDialogType] = useState<'NEW' | 'EDIT' | ''>('')

    const onFormSubmit = (
        _: CityFormModel,
        setSubmitting: (isSubmitting: boolean) => void
    ) => {
        toast.push(
            <Notification
                title={'City information updated'}
                type="success"
            />,
            {
                placement: 'top-center',
            }
        )
        setSubmitting(false)
    }

    const onCreditCardDialogClose = () => {
        setCcDialogType('')
        setSelectedCard({})
    }

    const onEditCreditCard = (
        card: Partial<CreditCard>,
        type: 'EDIT' | 'NEW'
    ) => {
        setCcDialogType(type)
        setSelectedCard(card)
    }

    const onCardUpdate = (
        cardValue: CreditCardInfo,
        form: FormikProps<CityData>,
        field: FieldInputProps<CityData>
    ) => {
        let paymentMethodsValue = form.values[
            field.name as keyof CityData
        ] as CreditCard[]

        if (cardValue.primary) {
            paymentMethodsValue.forEach((card) => {
                card.primary = false
            })
        }

        if (
            !paymentMethodsValue.some(
                (card) => card.cardId === cardValue.cardId
            )
        ) {
            paymentMethodsValue.push(cardValue)
        }

        paymentMethodsValue = paymentMethodsValue.map((card) => {
            if (card.cardId === cardValue.cardId) {
                card = { ...card, ...cardValue }
            }
            return card
        })

        let cardTemp = {}
        paymentMethodsValue = paymentMethodsValue.filter((card) => {
            if (card.primary) {
                cardTemp = card
            }
            return !card.primary
        })
        paymentMethodsValue = [
            ...[cardTemp as CreditCard],
            ...paymentMethodsValue,
        ]
        form.setFieldValue(field.name, paymentMethodsValue)
        onCreditCardDialogClose()
    }

    const onRedirect = (url: string) => {
        const win = window.open(url, '_blank')
        win?.focus()
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Formik
            enableReinitialize
            initialValues={data}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true)
                setTimeout(() => {
                    onFormSubmit(values, setSubmitting)
                }, 1000)
            }}
        >
            {({ values, touched, errors, isSubmitting, resetForm }) => {
                const validatorProps = { touched, errors }
                return (
                    <Form>
                        <FormContainer>
                            <FormDesription
                                title="Payment Method"
                                desc="You can update your cards information here"
                            />
                            <FormRow
                                name="paymentMethods"
                                alignCenter={false}
                                label="Credit Cards"
                                {...validatorProps}
                            >
                                <div className="rounded-lg border border-gray-200 dark:border-gray-600">
                                    {values?.paymentMethods?.map(
                                        (card, index) => (
                                            <div
                                                key={card.cardId}
                                                className={classNames(
                                                    'flex items-center justify-between p-4',
                                                    !isLastChild(
                                                        values.paymentMethods,
                                                        index
                                                    ) &&
                                                        'border-b border-gray-200 dark:border-gray-600'
                                                )}
                                            >
                                                <div className="flex items-center">
                                                    {card.cardType ===
                                                        'VISA' && (
                                                        <img
                                                            src="/img/others/img-8.png"
                                                            alt="visa"
                                                        />
                                                    )}
                                                    {card.cardType ===
                                                        'MASTER' && (
                                                        <img
                                                            src="/img/others/img-9.png"
                                                            alt="master"
                                                        />
                                                    )}
                                                    <div className="ml-3 rtl:mr-3">
                                                        <div className="flex items-center">
                                                            <div className="text-gray-900 dark:text-gray-100 font-semibold">
                                                                {
                                                                    card.cardHolderName
                                                                }{' '}
                                                                ••••{' '}
                                                                {
                                                                    card.last4Number
                                                                }
                                                            </div>
                                                            {card.primary && (
                                                                <Tag className="bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-100 rounded-md border-0 mx-2">
                                                                    <span className="capitalize">
                                                                        {' '}
                                                                        Primary{' '}
                                                                    </span>
                                                                </Tag>
                                                            )}
                                                        </div>
                                                        <span>
                                                            Expired{' '}
                                                            {
                                                                months[
                                                                    parseInt(
                                                                        card.expMonth
                                                                    ) - 1
                                                                ]
                                                            }{' '}
                                                            20
                                                            {card.expYear}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <Button
                                                        size="sm"
                                                        type="button"
                                                        onClick={() =>
                                                            onEditCreditCard(
                                                                card,
                                                                'EDIT'
                                                            )
                                                        }
                                                    >
                                                        Edit
                                                    </Button>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                                <div className="mt-2">
                                    <Button
                                        type="button"
                                        variant="plain"
                                        size="sm"
                                        icon={<HiPlus className="text-lg" />}
                                        onClick={() =>
                                            onEditCreditCard({}, 'NEW')
                                        }
                                    >
                                        <span className="font-semibold">
                                            Add new card
                                        </span>
                                    </Button>
                                </div>
                            </FormRow>
                            <FormRow
                                border={false}
                                name="otherMethod"
                                alignCenter={false}
                                label="Other payment methods"
                                {...validatorProps}
                            >
                                <div className="rounded-lg border border-gray-200 dark:border-gray-600">
                                    {values?.otherMethod?.map(
                                        (method, index) => (
                                            <div
                                                key={method.id}
                                                className={classNames(
                                                    'flex items-center justify-between p-4',
                                                    !isLastChild(
                                                        values.otherMethod,
                                                        index
                                                    ) &&
                                                        'border-b border-gray-200 dark:border-gray-600'
                                                )}
                                            >
                                                <div className="flex items-center">
                                                    {method.type ===
                                                        'PAYPAL' && (
                                                        <img
                                                            src="/img/others/img-10.png"
                                                            alt="visa"
                                                        />
                                                    )}
                                                    <div className="ml-3 rtl:mr-3 font-semibold">
                                                        {method.identifier}
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <Button
                                                        size="sm"
                                                        type="button"
                                                        onClick={() =>
                                                            onRedirect(
                                                                method.redirect
                                                            )
                                                        }
                                                    >
                                                        Edit
                                                    </Button>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </FormRow>
                            <Dialog
                                isOpen={
                                    ccDialogType === 'NEW' ||
                                    ccDialogType === 'EDIT'
                                }
                                onClose={onCreditCardDialogClose}
                                onRequestClose={onCreditCardDialogClose}
                            >
                                <h5 className="mb-4">Edit Credit Card</h5>
                                <Field name="paymentMethods">
                                    {({
                                        field,
                                        form,
                                    }: FieldProps<CityFormModel>) => {
                                        return (
                                            <CityForm
                                                type={ccDialogType}
                                                card={
                                                    selectedCard as CreditCardInfo
                                                }
                                                onUpdate={(cardValue) =>
                                                    onCardUpdate(
                                                        cardValue,
                                                        form,
                                                        field
                                                    )
                                                }
                                            />
                                        )
                                    }}
                                </Field>
                            </Dialog>
                            <div className="mt-4 ltr:text-right">
                                <Button
                                    className="ltr:mr-2 rtl:ml-2"
                                    type="button"
                                    onClick={() => resetForm()}
                                >
                                    Reset
                                </Button>
                                <Button
                                    variant="solid"
                                    loading={isSubmitting}
                                    type="submit"
                                >
                                    {isSubmitting ? 'Updating' : 'Update'}
                                </Button>
                            </div>
                            <FormDesription
                                className="mt-6"
                                title="City History"
                                desc="View your previos City"
                            />
                           
                        </FormContainer>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default City
