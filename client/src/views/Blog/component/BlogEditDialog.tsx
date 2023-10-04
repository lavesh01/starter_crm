// // import CustomerEditContent, { FormikRef } from './CustomerEditContent'

// import {
//     setDrawerClose,
//     setSelectedCustomer,
//     useAppDispatch,
//     useAppSelector,
// } from '../store'

// import Button from '@/components/ui/Button'
// import Drawer from '@/components/ui/Drawer'
// import type { MouseEvent } from 'react'
// import { useRef } from 'react'

// type DrawerFooterProps = {
//     onSaveClick: (event: MouseEvent<HTMLButtonElement>) => void
//     onCancel: (event: MouseEvent<HTMLButtonElement>) => void
// }

// const DrawerFooter = ({ onSaveClick, onCancel }: DrawerFooterProps) => {
//     return (
//         <div className="text-right w-full">
//             <Button size="sm" className="mr-2" onClick={onCancel}>
//                 Cancel
//             </Button>
//             <Button size="sm" variant="solid" onClick={onSaveClick}>
//                 Save
//             </Button>
//         </div>
//     )
// }

// const BlogEditDialog = () => {
//     const dispatch = useAppDispatch()
//     const drawerOpen = useAppSelector(
//         (state) => state.crmCustomers.data.drawerOpen
//     )

//     const onDrawerClose = () => {
//         dispatch(setDrawerClose())
//         dispatch(setSelectedCustomer({}))
//     }

//     const formikRef = useRef<FormikRef>(null)

//     const formSubmit = () => {
//         formikRef.current?.submitForm()
//     }

//     return (
//         <Drawer
//             isOpen={drawerOpen}
//             closable={false}
//             bodyClass="p-0"
//             footer={
//                 <DrawerFooter
//                     onCancel={onDrawerClose}
//                     onSaveClick={formSubmit}
//                 />
//             }
//             onClose={onDrawerClose}
//             onRequestClose={onDrawerClose}
//         >
//             {/* <CustomerEditContent ref={formikRef} /> */}
//         </Drawer>
//     )
// }

// export default BlogEditDialog
