import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const paymentMethods = [
    { name: "VISA", image: "/visa-logo-png-transparent.png.png" },
    { name: "Mastercard", image: "/Mastercard.png" },
    { name: "Nagad", image: "/Nagad-Logo.wine.png.png" },
    { name: "bKash", image: "/bkash-log-png.png.png" },
    { name: "Rocket", image: "/dutch-bangla-rocket-logo-png_seeklogo.png.png" },
    { name: "Upay", image: "/upay.png.jpg" },
    { name: "SureCash", image: "/surecash-logo-sure-cash-mobile-banking.png.jpg" },
    { name: "TapTap Send", image: "/taptap.png.png" },
    { name: "CellFin", image: "/cellfin.png.png" },
    { name: "Dutch-Bangla Bank", image: "/Dutch-Bangla-Bank-ltd.png.png" },
    { name: "City Bank", image: "/city-bank-logo.png.png" },
    { name: "Islami Bank", image: "/islami-bank-bangladesh.png.png" },
    { name: "BRAC Bank", image: "/Brac-Bank-Logo.png.png" },
    { name: "UCB", image: "/united-commercial-bank-UCB.png.png" },
    { name: "EBL", image: "/simple-math.png.png" },
];

type Agent = {
    name: string;
    mobileNumber: string;
    email: string;
    address: string;
    city: string;
    nationality: string;
    passportOrNid: string;
    dateOfBirth: string;
    gender: string;
    maritalStatus: string;
};

export default function AgentPortalProfile() {
    const navigate = useNavigate();

    const [agent, setAgent] = useState<Agent | null>(null);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    const token = localStorage.getItem("agentToken");

    useEffect(() => {
        if (!token) {
            navigate("/agent-portal");
            return;
        }

        const getProfile = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/agent/profile",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const result = await response.json();

                if (!response.ok || !result.success) {
                    localStorage.removeItem("agentToken");
                    localStorage.removeItem("agentData");
                    navigate("/agent-portal");
                    return;
                }

                setAgent(result.agent);
            } catch (error) {
                console.error("Profile error:", error);
                setError("Unable to connect to server.");
            } finally {
                setLoading(false);
            }
        };

        getProfile();
    }, [navigate, token]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!agent) return;

        setAgent({
            ...agent,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = async () => {
        if (!agent || !token) return;

        setSaving(true);
        setError("");

        try {
            const response = await fetch(
                "http://localhost:5000/api/agent/profile",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(agent),
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                setError(
                    result.message || "Profile update failed."
                );
                return;
            }

            setAgent(result.agent);

            localStorage.setItem(
                "agentData",
                JSON.stringify(result.agent)
            );

            setEditing(false);
        } catch (error) {
            console.error("Update profile error:", error);
            setError("Unable to connect to server.");
        } finally {
            setSaving(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("agentToken");
        localStorage.removeItem("agentData");

        navigate("/agent-portal");
    };

    if (loading) {
        return (
            <div className="flex h-screen w-full items-center justify-center font-['Poppins']">
                <p className="text-[18px] text-[#444]">
                    Loading profile...
                </p>
            </div>
        );
    }

    if (!agent) {
        return (
            <div className="flex h-screen w-full items-center justify-center font-['Poppins']">
                <p className="text-[18px] text-red-600">
                    {error || "Profile not found."}
                </p>
            </div>
        );
    }

    return (
        <div className="min-w-[1440px] bg-white">

            {/* Navbar */}
            <nav className="flex h-[106px] w-[1440px] items-center justify-between border-b border-black/20 px-[80px]">

                <div
                    className="relative flex h-[46.22px] w-[184.35px] cursor-pointer items-center justify-center"
                    onClick={() => navigate("/")}
                >
                    <img
                        src="/logo.png"
                        alt="Purabi General Insurance"
                        className="h-[33.17px] w-[180px] object-contain opacity-0"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-[rgba(172,62,37,1)] [mask:url('/logo.png')_center/contain_no-repeat]" />
                </div>

                <div className="flex gap-[15px]">

                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="h-[43px] rounded-[5px] border border-[rgba(172,62,37,0.25)] bg-[rgba(172,62,37,0.2)] px-[25px] text-[15px] font-bold text-[rgba(172,62,37,1)] transition-all duration-300 hover:bg-[rgba(172,62,37,1)] hover:text-white"
                    >
                        Go Back to Home
                    </button>

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="h-[43px] rounded-[5px] bg-[rgba(172,62,37,1)] px-[25px] text-[15px] font-bold text-white transition-all duration-300 hover:bg-[#96351F]"
                    >
                        Logout
                    </button>

                </div>
            </nav>

            {/* Notification */}
            <div className="flex h-[52px] w-[1440px] items-center justify-center gap-[10px] bg-[rgba(172,62,37,0.1)] p-[10px]">

                <img
                    src="/notification.png"
                    alt="Notification"
                    className="h-[32px] w-[32px] object-contain"
                />

                <div className="flex h-[21px] w-[777px] items-center">

                    <span className="font-['Poppins'] text-[14px] font-normal">
                        You’ve Earned{" "}
                    </span>

                    <span className="font-['Poppins'] text-[14px] font-bold">
                        ৳30,000
                    </span>

                    <span className="font-['Poppins'] text-[14px] font-bold">
                        {" "}in Commissions! Great job!
                    </span>

                    <span className="font-['Poppins'] text-[14px] font-normal">
                        {" "}Your latest commissions have been updated.
                    </span>

                </div>
            </div>

            {/* Main Content */}
            <section className="flex min-h-[499px] w-[1440px] gap-[20px] px-[80px] py-[50px]">

                {/* Sidebar */}
                <div className="h-[399px] w-[300px]">

                    <div className="flex h-[52px] w-[300px] items-center bg-[rgba(172,62,37,1)] px-[20px]">
                        <p className="m-0 font-['Poppins'] text-[16px] text-white">
                            Profile Details
                        </p>
                    </div>

                    <div className="flex h-[52px] w-[300px] items-center px-[20px]">
                        <p className="m-0 font-['Poppins'] text-[16px] text-[#444]">
                            My Orders
                        </p>
                    </div>

                    <div className="flex h-[52px] w-[300px] items-center px-[20px]">
                        <p className="m-0 font-['Poppins'] text-[16px] text-[#444]">
                            My Policies
                        </p>
                    </div>

                    <div className="flex h-[52px] w-[300px] items-center px-[20px]">
                        <p className="m-0 font-['Poppins'] text-[16px] text-[#444]">
                            My Claims
                        </p>
                    </div>

                    <div className="flex h-[52px] w-[300px] items-center px-[20px]">
                        <p className="m-0 font-['Poppins'] text-[16px] text-[#444]">
                            Settings
                        </p>
                    </div>

                </div>

                {/* Right Content */}
                <div className="flex w-[960px] flex-col gap-[30px]">

                    <div className="flex items-center justify-between">

                        <h1 className="m-0 font-['Poppins'] text-[30px] font-medium">
                            My Details
                        </h1>

                        <button
                            type="button"
                            onClick={() => {
                                setEditing(!editing);
                                setError("");
                            }}
                            className="h-[40px] rounded-[5px] bg-[rgba(172,62,37,1)] px-[20px] font-['Poppins'] text-[14px] text-white"
                        >
                            {editing ? "Cancel" : "Edit Profile"}
                        </button>

                    </div>

                    {/* Profile Image */}
                    <div className="flex h-[65px] w-[228px] gap-[10px]">

                        <img
                            src="/profile.png"
                            alt="Profile"
                            className="h-[65px] w-[65px] rounded-[5px] object-cover"
                        />

                        <div className="flex h-[28px] items-center rounded-[2px] bg-[rgba(172,62,37,1)] px-[10px] py-[5px]">
                            <span className="font-['Poppins'] text-[12px] text-white">
                                {agent.name}
                            </span>
                        </div>

                    </div>

                    {/* Error */}
                    {error && (
                        <div className="rounded-[5px] border border-red-100 bg-red-50 px-[15px] py-[12px]">
                            <p className="m-0 font-['Poppins'] text-[13px] text-red-600">
                                {error}
                            </p>
                        </div>
                    )}

                    {/* Account Information */}
                    <div className="flex w-[960px] flex-col gap-[20px] rounded-[5px] bg-white p-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]">

                        <h2 className="m-0 font-['Poppins'] text-[18px] font-medium">
                            Account Information
                        </h2>

                        <div className="grid grid-cols-2 gap-x-[40px] gap-y-[20px]">

                            {/* Name */}
                            <ProfileField
                                label="Name"
                                name="name"
                                value={agent.name}
                                editing={editing}
                                onChange={handleChange}
                            />

                            {/* Mobile */}
                            <ProfileField
                                label="Mobile Number"
                                name="mobileNumber"
                                value={agent.mobileNumber}
                                editing={editing}
                                onChange={handleChange}
                            />

                            {/* Email */}
                            <ProfileField
                                label="Email"
                                name="email"
                                value={agent.email}
                                editing={editing}
                                onChange={handleChange}
                            />

                            {/* Address */}
                            <ProfileField
                                label="Address"
                                name="address"
                                value={agent.address}
                                editing={editing}
                                onChange={handleChange}
                            />

                            {/* City */}
                            <ProfileField
                                label="City"
                                name="city"
                                value={agent.city}
                                editing={editing}
                                onChange={handleChange}
                            />

                            {/* Nationality */}
                            <ProfileField
                                label="Nationality"
                                name="nationality"
                                value={agent.nationality}
                                editing={editing}
                                onChange={handleChange}
                            />

                            {/* Passport */}
                            <ProfileField
                                label="Passport/NID"
                                name="passportOrNid"
                                value={agent.passportOrNid}
                                editing={editing}
                                onChange={handleChange}
                            />

                            {/* Date of Birth */}
                            <ProfileField
                                label="Date of Birth"
                                name="dateOfBirth"
                                value={
                                    agent.dateOfBirth
                                        ? new Date(
                                            agent.dateOfBirth
                                        ).toLocaleDateString(
                                            "en-GB"
                                        )
                                        : ""
                                }
                                editing={false}
                                onChange={handleChange}
                            />

                            {/* Gender */}
                            <ProfileField
                                label="Gender"
                                name="gender"
                                value={agent.gender}
                                editing={editing}
                                onChange={handleChange}
                            />

                            {/* Marital Status */}
                            <ProfileField
                                label="Marital Status"
                                name="maritalStatus"
                                value={agent.maritalStatus}
                                editing={editing}
                                onChange={handleChange}
                            />

                        </div>

                        {/* Save Button */}
                        {editing && (
                            <div className="flex justify-end pt-[10px]">

                                <button
                                    type="button"
                                    onClick={handleSave}
                                    disabled={saving}
                                    className="h-[45px] rounded-[5px] bg-[rgba(172,62,37,1)] px-[30px] font-['Poppins'] text-[14px] font-medium text-white transition-all hover:bg-[#96351F] disabled:opacity-60"
                                >
                                    {saving
                                        ? "Saving..."
                                        : "Save Changes"}
                                </button>

                            </div>
                        )}

                    </div>

                </div>
            </section>

            {/* Footer */}
            <footer className="box-border flex h-[367px] w-[1440px] flex-col gap-[50px] bg-[linear-gradient(180deg,rgba(172,62,37,0)_0%,rgba(172,62,37,0.1)_100%)] px-[80px] pt-[100px] pb-[50px]">

                <div className="flex h-[144px] w-[1280px] flex-col gap-[10px]">

                    <div className="flex h-[18px] w-[111px] items-center">
                        <span className="font-['Poppins'] text-[12px] text-[#444]">
                            Payment Channels
                        </span>
                    </div>

                    <div className="flex h-[116px] w-[1280px] flex-col gap-[20px]">

                        <div className="flex h-[48px] w-[1280px] items-center gap-[20px]">
                            {paymentMethods.slice(0, 11).map((payment) => (
                                <div
                                    key={payment.name}
                                    className="flex h-[48px] w-[98.18px] shrink-0 items-center justify-center rounded-[5px] border border-[rgba(172,62,37,0.2)] bg-white"
                                >
                                    <img
                                        src={payment.image}
                                        alt={payment.name}
                                        className="max-h-[30px] max-w-[72px] object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="flex h-[48px] w-[1280px] items-center justify-center gap-[20px]">
                            {paymentMethods.slice(11).map((payment) => (
                                <div
                                    key={payment.name}
                                    className="flex h-[48px] w-[98.67px] shrink-0 items-center justify-center rounded-[5px] border border-[rgba(172,62,37,0.2)] bg-white"
                                >
                                    <img
                                        src={payment.image}
                                        alt={payment.name}
                                        className="max-h-[30px] max-w-[72px] object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                <div className="flex h-[23px] w-[1280px] items-center justify-between">

                    <p className="m-0 font-['Poppins'] text-[15px] text-[#444]">
                        Copyright ©{" "}
                        <span className="font-bold text-[rgba(172,62,37,1)]">
                            360D Soul Limited
                        </span>{" "}
                        2025. All rights reserved.
                    </p>

                    <div className="flex gap-[50px] font-['Poppins'] text-[15px] text-[#444]">
                        <span>Teams & Condition</span>
                        <span>Privacy & Policy</span>
                        <span>Refund Policy</span>
                    </div>

                </div>

            </footer>
        </div>
    );
}

/* ==============================
   Profile Field
============================== */

function ProfileField({
    label,
    name,
    value,
    editing,
    onChange,
}: {
    label: string;
    name: string;
    value: string;
    editing: boolean;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void;
}) {
    return (
        <div className="flex min-h-[45px] items-center gap-[10px]">

            <div className="w-[120px] shrink-0">
                <p className="m-0 font-['Poppins'] text-[14px] font-bold">
                    {label}
                </p>
            </div>

            {editing ? (
                <input
                    type="text"
                    name={name}
                    value={value || ""}
                    onChange={onChange}
                    className="h-[40px] flex-1 rounded-[4px] border border-[rgba(172,62,37,0.2)] bg-[#f8f8f8] px-[10px] font-['Poppins'] text-[14px] outline-none focus:border-[#AC3E25] focus:bg-white"
                />
            ) : (
                <p className="m-0 flex-1 font-['Poppins'] text-[14px] text-[#444]">
                    : {value || "Not provided"}
                </p>
            )}

        </div>
    );
}