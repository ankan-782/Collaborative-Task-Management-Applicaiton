import logo from "../../../assets/songo-logo-white.svg";

export default function DashboardLogo({ extraClasses }) {
    return (
        <img
            src={logo}
            alt="company logo"
            className={`${extraClasses} cursor-pointer`}
        />
    );
}
