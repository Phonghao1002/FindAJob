import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RecruitNewsAPI = () => {
    const [recruitNews, setRecruitNews] = useState([])
    const [callback, setCallback] = useState(false)
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)
    

    useEffect(() => {
        const getRecruitNews = async () => {
            const res = await axios.get(`/api/recruitNews?limit=${page*9}&${category}&${sort}&title[regex]=${search}`)
            setRecruitNews(res.data.recruitNews)
            // console.log(res)
            setResult(res.data.result)

        }
        getRecruitNews()
    }, [callback, category, sort, search, page])

    return {
        category: [category, setCategory],
        callback: [callback, setCallback],
        recruitNews: [recruitNews, setRecruitNews],
        sort: [sort, setSort],
        search: [search, setSearch],
        page: [page, setPage],
        result: [result, setResult]
    }

}

export default RecruitNewsAPI
