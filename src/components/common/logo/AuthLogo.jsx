import logo from "../../../assets/songo-logo.svg";

export default function AuthLogo({ extraClasses }) {
    return (
        <img
            src={logo}
            alt="company logo"
            className={`${extraClasses} cursor-pointer`}
        />
    );
}
