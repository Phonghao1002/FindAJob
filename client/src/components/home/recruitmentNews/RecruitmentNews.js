import { useContext } from "react"
import { GlobalState } from "../../../GlobalState"
import SearchItem from "../searchItem/SearchItem"
import Loading from "../../utils/loading/Loading"
import "./recruitmentNews.css"
import LoadMore from "./LoadMore"

const RecruitmentNews = () => {
    const state = useContext(GlobalState)
    const [recruitNews] = state.recruitmentNewsAPI.recruitNews
    const [isAdmin] = state.userAPI.isAdmin
    const addSaveJobs = state.userAPI.addSaveJobs
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.recruitmentNewsAPI.category
    const [sort, setSort] = state.recruitmentNewsAPI.sort
    const [search, setSearch] = state.recruitmentNewsAPI.search
    // console.log(state)

    return (
        <div className="listContainer">
            <div className="listWrapper">
                <div className="listSearch">
                    <h1 className="lsTitle">Search</h1>
                    <div className="lsItem">
                        <label>Tìm kiếm</label>
                        <input type="text" value={search}
                            placeholder="Nhập vị trí, tên Công ty, địa điểm ..."
                            onChange={e => setSearch(e.target.value.toLowerCase())}
                        />
                    </div>
                    <div className="lsItem">
                        <label>Recruitment date</label>
                        <input placeholder="10/5/2022" />
                    </div>
                    <div className="lsItem">
                        <label>Options</label>
                        <div className="lsOptions">
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Sắp xếp
                                </span>
                                <select className="lsOptioncbbox">
                                    <option value=''>Mới nhất</option>
                                    <option value='sort=oldest'>Cũ nhất</option>
                                </select>
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Các loại ngôn ngữ phổ biến
                                </span>
                                <select className="lsOptioncbbox">
                                    <option>Tất cả</option>
                                    <option>JavaScript</option>
                                    <option>Python</option>
                                    <option>Java</option>
                                    <option>C/C++</option>
                                    <option>PHP</option>
                                    <option>C-Sharp (C#)</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Ngành nghề</span>
                                <select className="lsOptioncbbox">
                                    <option>Tất cả ngành nghề</option>
                                    <option>Lập trình ứng dụng điện thoại</option>
                                    <option>Kĩ sư phần mềm</option>
                                    <option>Thiết kế trò chơi điện tử</option>
                                    <option>Chuyên gia bảo mật</option>
                                    <option>Phân tích hệ thống máy tính</option>
                                    <option>Phát triển và thiết kế website</option>
                                    <option>Kỹ thuật viên thông tin y tế</option>
                                    <option>Quản lý công nghệ</option>
                                    <option>Quản trị cơ sở dữ liệu </option>
                                    <option>Quản trị mạng</option>
                                </select>
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Tất cả trình độ</span>
                                <select className="lsOptioncbbox">
                                    <option>Đại học</option>
                                    <option>Cao đẳng</option>
                                    <option>Trung cấp</option>
                                    <option>Lao động phổ thông</option>
                                    <option>Không yêu cầu</option>
                                </select>
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Mức lương</span>
                                <select className="lsOptioncbbox" value={sort} onChange={e => setSort(e.target.value)}>
                                    <option>1.500000 - 3.000000</option>
                                    <option>4.000000 - 7.000000</option>
                                    <option>7.000000 - 8.500000</option>
                                    <option>8.500000 - 9.000000</option>
                                    <option value='sort=-price'>Price: Hight-Low</option>
                                    <option value='sort=price'>Price: Low-Hight</option>
                                </select>
                                {/* <input
                                    type="number"
                                    min={1.500000}
                                    className="lsOptionInput"
                                    placeholder="1.500000 - 5.000000"
                                /> */}
                            </div>
                        </div>
                    </div>
                    <button>Search</button>
                </div>
                <div className="listResult">
                    {recruitNews.map(recruitNew => {
                        return <SearchItem key={recruitNew._id} recruitNew={recruitNew} isAdmin={isAdmin} addSaveJobs={addSaveJobs} />
                    })}
                    {/* <SearchItem /> */}
                    {/* <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem /> */}
                    <LoadMore />

                </div>
                {recruitNews.length === 0 && <Loading />}
            </div>
        </div>
    )
}

export default RecruitmentNews