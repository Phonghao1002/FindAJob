import LocationOnIcon from '@mui/icons-material/LocationOn';
export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },

    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

//temporary data
export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Jamie Lannister",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "2snow@gmail.com",
        status: "passive",
        age: 42,
    },
    {
        id: 3,
        username: "Lannister",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "3snow@gmail.com",
        status: "pending",
        age: 45,
    },
    {
        id: 4,
        username: "Stark",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "4snow@gmail.com",
        status: "active",
        age: 16,
    },
    {
        id: 5,
        username: "Targaryen",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "5snow@gmail.com",
        status: "passive",
        age: 22,
    },
    {
        id: 6,
        username: "Melisandre",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "6snow@gmail.com",
        status: "active",
        age: 15,
    },
    {
        id: 7,
        username: "Clifford",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "7snow@gmail.com",
        status: "passive",
        age: 44,
    },
    {
        id: 8,
        username: "Frances",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "8snow@gmail.com",
        status: "active",
        age: 36,
    },
    {
        id: 9,
        username: "Roxie",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "snow@gmail.com",
        status: "pending",
        age: 65,
    },
    {
        id: 10,
        username: "Roxie",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "snow@gmail.com",
        status: "active",
        age: 65,
    },
];

export const userColumns1 = [
    { field: "id", headerName: "ID", width: 40 },
    {
        field: "title",
        headerName: "Tiêu đề",
        width: 280,
        renderCell: (params) => {
            return (
                <div className="cellWithImgRecruitNews">
                    <div>
                        {params.row.title}
                    </div>
                    <div>
                        <LocationOnIcon className='icon'/>
                        {params.row.address}
                    </div>

                </div>
            );
        },
    },
    {
        field: "applications",
        headerName: "lượt ứng tuyển",
        width: 120,
    },

    {
        field: "date",
        headerName: "Ngày đăng và ngày hết hạn",
        width: 230,
    },
    {
        field: "status",
        headerName: "Tình trạng",
        width: 100,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

export const userRows1 = [
    {
        id: 1,
        title: ".net developer(new)",
        address: "Đa Nang",
        applications: "10",
        date: "10/04/2022 & 01/06/2022",
        status: "active",
    },
    {
        id: 2,
        title: "java api developer (java, springboot, restapi, mulesoft)(new)",
        address: "Đa Nang",
        applications: "24",
        date: "10/04/2022 & 30/05/2022",
        status: "passive",
    },
    {
        id: 3,
        title: "senior reactjs engineer(new)",
        address: "Đa Nang",
        applications: "8",
        date: "1/04/2022 & 01/07/2022",
        status: "pending",
    },
    {
        id: 4,
        title: ".net developer(new)ow",
        address: "Đa Nang",
        applications: "30",
        date: "10/04/2022 & 01/06/2022",
        status: "active",
    },
    {
        id: 5,
        title: "java api developer (java, springboot, restapi, mulesoft)(new)",
        address: "Đa Nang",
        applications: "12",
        date: "10/04/2022 & 30/05/2022",
        status: "passive",
    },
    {
        id: 6,
        title: "senior reactjs engineer(new)ow",
        address: "Đa Nang",
        applications: "5",
        date: "1/04/2022 & 01/07/2022",
        status: "active",
    },
    {
        id: 7,
        title: "senior reactjs engineer(new)",
        address: "Đa Nang",
        applications: "25",
        date: "1/04/2022 & 01/07/2022",
        status: "passive",
    },
    {
        id: 8,
        title: ".net developer(new)",
        address: "Đa Nang",
        applications: "1",
        date: "10/04/2022 & 01/06/2022",
        status: "active",
    },
    {
        id: 9,
        title: "java api developer (java, springboot, restapi, mulesoft)(new)",
        address: "Đa Nang",
        applications: "35",
        date: "10/04/2022 & 30/05/2022",
        status: "pending",
    },
    {
        id: 10,
        title: ".net developer(new)",
        address: "Đa Nang",
        applications: "16",
        date: "10/04/2022 & 01/06/2022",
        status: "active",
    },
];


export const userColumns2 = [
    { field: "id", headerName: "ID", width: 40 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },
    {
        field: "age",
        headerName: "Age",
        width: 80,
    },
    {
        field: "fileCV",
        headerName: "File CV",
        width: 100,
        renderCell: (params) => {
            return (
                <div className="cellWithFileCV">
                    {params.row.fileCV}
                </div>
            );
        },
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

//temporary data
export const userRows2 = [
    {
        id: 1,
        username: "Snow",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        fileCV: "FileCV.doc",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Jamie Lannister",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "2snow@gmail.com",
        fileCV: "FileCV.doc",
        status: "passive",
        age: 42,
    },
    {
        id: 3,
        username: "Lannister",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "3snow@gmail.com",
        fileCV: "FileCV.doc",
        status: "pending",
        age: 45,
    },
    {
        id: 4,
        username: "Stark",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "4snow@gmail.com",
        fileCV: "FileCV.doc",
        status: "active",
        age: 16,
    },
    {
        id: 5,
        username: "Targaryen",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "5snow@gmail.com",
        fileCV: "FileCV.doc",
        status: "passive",
        age: 22,
    },
    {
        id: 6,
        username: "Melisandre",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "6snow@gmail.com",
        fileCV: "FileCV.doc",
        status: "active",
        age: 15,
    },
    {
        id: 7,
        username: "Clifford",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "7snow@gmail.com",
        fileCV: "FileCV.doc",
        status: "passive",
        age: 44,
    },
    {
        id: 8,
        username: "Frances",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "8snow@gmail.com",
        fileCV: "FileCV.doc",
        status: "active",
        age: 36,
    },
    {
        id: 9,
        username: "Roxie",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "snow@gmail.com",
        fileCV: "FileCV.doc",
        status: "pending",
        age: 65,
    },
    {
        id: 10,
        username: "Roxie",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "snow@gmail.com",
        fileCV: "FileCV.doc",
        status: "active",
        age: 65,
    },
];