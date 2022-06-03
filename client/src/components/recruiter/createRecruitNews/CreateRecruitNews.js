import "./createRecruitNews.scss"
import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../../../GlobalState'
import Loading from '../../utils/loading/Loading'
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const initialState = {
    recruitNews_id: '',
    title: '',
    price: 0,
    description: '',
    content: '',
    category: '',
    address: '',
    rank: '',
    _id: ''
}

const CreateRecruitNews = () => {
    const state = useContext(GlobalState)
    const [recruitNews, setRecruitNews] = useState(initialState)
    const [categories] = state.categoriesAPI.categories
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)

    const [token] = state.token
    const [isAdmin] = state.userAPI.isAdmin
    const [callback, setCallback] = state.recruitmentNewsAPI.callback
    const [recruitNewss] = state.recruitmentNewsAPI.recruitNews
    const [onEdit, setOnEdit] = useState(false)

    const navigate = useNavigate()
    const param = useParams()


    useEffect(() => {
        if (param.id) {
            setOnEdit(true)
            recruitNewss.forEach(recruitNews => {
                if (recruitNews._id === param.id) {
                    setRecruitNews(recruitNews)
                    setImages(recruitNews.images)
                }
            })

        } else {
            setOnEdit(false)
            setRecruitNews(initialState)
            setImages(false)
        }
    }, [param.id, recruitNewss])

    const handleUpload = async e => {
        e.preventDefault()
        try {
            if (!isAdmin) return alert("You're not an admin")
            const file = e.target.files[0]

            if (!file) return alert("File not exist.")

            if (file.size > 1024 * 1024) // 1mb
                return alert("Size too large!")

            if (file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
                return alert("File format is incorrect.")

            let formData = new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('/api/upload', formData, {
                headers: { 'content-type': 'multipart/form-data', Authorization: token }
            })
            setLoading(false)
            setImages(res.data)


        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleDestroy = async () => {
        try {
            if (!isAdmin) return alert("You're not an admin")
            setLoading(true)
            await axios.post('/api/destroy', { public_id: images.public_id }, {
                headers: { Authorization: token }
            })
            setLoading(false)
            setImages(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    const handleChangeInput = e => {
        const { name, value } = e.target
        console.log(name, value)
        setRecruitNews({ ...recruitNews, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if (!isAdmin) return alert("You're not an admin")
            if (!images) return alert("No Image Upload")

            if (onEdit) {
                await axios.put(`/api/recruitNews/${recruitNews._id}`, { ...recruitNews, images }, {
                    headers: { Authorization: token }
                  })
               
            }else{
                await axios.post('/api/recruitNews', { ...recruitNews, images }, {
                    headers: { Authorization: token }
                })
            }
            setCallback(!callback)
            navigate("/recruiter/test")
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const styleUpload = {
        display: images ? "block" : "none"
    }

    return (
        <div className="create_recruitNews">
            <div className="upload">
                <input type="file" name="file" id="file_up" onChange={handleUpload} />
                {
                    loading ? <div id="file_img"><Loading /></div>

                        : <div id="file_img" style={styleUpload}>
                            <img src={images ? images.url : ''} alt="" />
                            <span onClick={handleDestroy}>X</span>
                        </div>
                }

            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="recruitNews_id">RecruitNews ID</label>
                    <input type="text" name="recruitNews_id" id="recruitNews_id" required
                        value={recruitNews.recruitNews_id} onChange={handleChangeInput} disabled={onEdit} />
                </div>

                <div className="row">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" required
                        value={recruitNews.title} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" required
                        value={recruitNews.price} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description" id="description" required
                        value={recruitNews.description} rows="5" onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="content">Content</label>
                    <textarea type="text" name="content" id="content" required
                        value={recruitNews.content} rows="7" onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="content">Address</label>
                    <input type="text" name="address" id="address" required
                        value={recruitNews.address} rows="7" onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="rank">Rank</label>
                    <input type="text" name="rank" id="rank" required
                        value={recruitNews.rank} rows="7" onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="categories">Categories: </label>
                    <select name="category" value={recruitNews.category} onChange={handleChangeInput}>
                        <option value="">Please select a category</option>
                        {
                            categories.map(category => (
                                <option value={category.name} key={category._id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <button type="submit">{onEdit ? "Update" : "Create"}</button>
            </form>
        </div>
    )
}

export default CreateRecruitNews