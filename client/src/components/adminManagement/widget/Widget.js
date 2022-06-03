import "./widget.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import NewspaperIcon from '@mui/icons-material/Newspaper';

const Widget = ({ type }) => {
    let data

    //temporary
    const amount = 100;
    // const diff = 20;
    switch (type) {
        case "Tài khoản chờ phê duyệt":
            data = {
                title: "Tài khoản chờ phê duyệt",
                isMoney: false,
                diff: 10,
                link: "Xem chi tiết",
                icon: (
                    <PersonOutlinedIcon
                        className="icon"
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }}
                    />
                ),
            };
            break;
        case "Tài khoản hoạt động":
            data = {
                title: "Tài khoản hoạt động",
                isMoney: false,
                diff: 5,
                link: "Xem chi tiết",
                icon: (
                    <PersonOutlinedIcon
                        className="icon"
                        style={{
                            backgroundColor: "rgba(30 144 255)",
                            color: "goldenrod",
                        }}
                    />
                ),
            };
            break;
        case "Tin đã được duyệt":
            data = {
                title: "Tin đã được duyệt",
                isMoney: true,
                diff: 15,
                link: "Xem chi tiết",
                icon: (
                    <NewspaperIcon
                        className="icon"
                        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                    />
                ),
            };
            break;
        case "Tin chờ phê duyệt":
            data = {
                title: "Tin chờ phê duyệt",
                isMoney: true,
                diff: 10,
                link: "Xem chi tiết",
                icon: (
                    <NewspaperIcon
                        className="icon"
                        style={{
                            backgroundColor: "rgba(128, 0, 128, 0.2)",
                            color: "purple",
                        }}
                    />
                ),
            };
            break;
        default:
            break;
    }
    return (
        <div className='widget'>
            <div className="left">
                <span className="title">
                    {data.title}
                </span>
                <span className="counter">
                    {data.isMoney} {data.diff}
                </span>
                <span className="link">
                    {data.link}
                </span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {data.diff} 
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget