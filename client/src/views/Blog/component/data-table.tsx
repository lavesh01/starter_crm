// import type { ColumnDef, OnSortParam } from '@/components/shared/DataTable'
// import { useEffect, useMemo, useState } from 'react'

// import BlogEditDialog from './BlogEditDialog'
// import Button from '@/components/ui/Button'
// import DataTable from '@/components/shared/DataTable'
// import axios from 'axios'
// import { useAppDispatch } from '@/store'
// import useThemeClass from '@/utils/hooks/useThemeClass'

// type Blog = {
//     id: string;
//     title: string;
//     description: string;
// }

// const ActionColumn = ({ row }: { row: Blog }) => {
//     const { textTheme } = useThemeClass()
//     const dispatch = useAppDispatch()

//     const onEdit = () => {
//         dispatch(setDrawerOpen())
//         dispatch(setSelectedBlog(row))
//     }

//     return (
//         <div
//             className={`${textTheme} cursor-pointer select-none font-semibold`}
//             onClick={onEdit}
//         >
//             Edit
//         </div>
//     )
// }

// const staticData: Blog[] = [
//     {
//         id: '1',
//         title: 'Sample Blog 1',
//         description: 'Description for Sample Blog 1',
//     },
//     {
//         id: '2',
//         title: 'Sample Blog 2',
//         description: 'Description for Sample Blog 2',
//     },
//     // Add more static blog items as needed
// ]

// const BlogTable = () => {
//     const [data, setData] = useState<Blog[]>(staticData)
//     const [loading, setLoading] = useState(false)
//     const [tableData, setTableData] = useState<{
//         pageIndex: number
//         pageSize: number
//         sort: {
//             order: '' | 'asc' | 'desc'
//             key: string | number;
//         };
//         query: string
//         total: number
//     }>({
//         total: 0,
//         pageIndex: 1,
//         pageSize: 10,
//         query: '',
//         sort: {
//             order: '',
//             key: '',
//         },
//     })

//     const columns: ColumnDef<Blog>[] = useMemo(() => {
//         return [
//             {
//                 header: 'Title',
//                 accessorKey: 'title',
//             },
//             {
//                 header: 'Description',
//                 accessorKey: 'description',
//             },
//             {
//                 header: '',
//                 id: 'action',
//                 cell: (props) => <ActionColumn row={props.row.original} />
//                 // cell: (props) => (
//                 //     <Button size="xs" onClick={() => console.log('Action clicked', props)}>
//                 //         Edit
//                 //     </Button>
//                 // ),
//             },
//             {
//                 header: 'Delete',
//                 id: 'action',
//                 cell: (props) => (
//                     <Button size="xs" onClick={() => console.log('Action clicked', props)}>
//                         Delete
//                     </Button>
//                 ),
//             },
//         ]
//     }, [])

//     const handlePaginationChange = (pageIndex: number) => {
//         setTableData((prevData) => ({ ...prevData, ...{ pageIndex } }))
//     }

//     const handleSelectChange = (pageSize: number) => {
//         setTableData((prevData) => ({ ...prevData, ...{ pageSize } }))
//     }

//     const handleSort = ({ order, key }: OnSortParam) => {
//         setTableData((prevData) => ({
//             ...prevData,
//             sort: { order, key }
//         }))
//     }

//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         setLoading(true)
//     //         const response = await axios.post('/api/crm/customers', tableData)
//     //         if (response.data) {
//     //             setData(response.data.data)
//     //             setLoading(false)
//     //             setTableData((prevData) => ({
//     //                 ...prevData,
//     //                 ...{ total: response.data.total },
//     //             }))
//     //         }
//     //     }
//     //     fetchData()
//     //     // eslint-disable-next-line react-hooks/exhaustive-deps
//     // }, [tableData.pageIndex, tableData.sort, tableData.pageSize])

//     return (
//         <>
//         <DataTable<Blog>
//             columns={columns}
//             data={data}
//             loading={loading}
//             pagingData={{
//                 total: tableData.total,
//                 pageIndex: tableData.pageIndex,
//                 pageSize: tableData.pageSize,
//             }}
//             onPaginationChange={handlePaginationChange}
//             onSelectChange={handleSelectChange}
//             onSort={handleSort}
//         />
//         <BlogEditDialog />
//         </>
//     )
// }

// export default BlogTable

