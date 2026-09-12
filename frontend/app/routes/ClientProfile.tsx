import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

type ClientProfileData = {
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

export default function ClientProfile() {
    const navigate = useNavigate();

    const [profile, setProfile] =
        useState<ClientProfileData | null>(null);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    useEffect(() => {
        const token =
            localStorage.getItem("clientToken");

        if (!token) {
            setError(
                "Client session not found. Please verify OTP again."
            );
            setLoading(false);
            return;
        }

        const fetchProfile = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/client/profile",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const result =
                    await response.json();

                if (!response.ok || !result.success) {
                    throw new Error(
                        result.message ||
                        "Unable to load client profile."
                    );
                }

                setProfile(result.client);
            } catch (error) {
                console.error(
                    "Fetch client profile error:",
                    error
                );

                setError(
                    error instanceof Error
                        ? error.message
                        : "Unable to connect to server."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return (
            <div className="flex h-[180px] w-full items-center justify-center">
                <p className="font-['Poppins'] text-[14px] text-[#444]">
                    Loading...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex h-[180px] w-full items-center justify-center">
                <p className="font-['Poppins'] text-[14px] text-red-600">
                    {error}
                </p>
            </div>
        );
    }

    if (!profile) {
        return (
            <div className="flex h-[180px] w-full items-center justify-center">
                <p className="font-['Poppins'] text-[14px] text-[#444]">
                    No personal information found.
                </p>
            </div>
        );
    }

    const formatDate = (date: string) => {
        if (!date) {
            return "Not provided";
        }

        const parsedDate = new Date(date);

        if (Number.isNaN(parsedDate.getTime())) {
            return date;
        }

        return parsedDate.toLocaleDateString(
            "en-GB",
            {
                day: "2-digit",
                month: "long",
                year: "numeric",
            }
        );
    };

    return (
        <div className="grid w-full grid-cols-2 gap-x-[70px] gap-y-[18px]">

            {/* LEFT COLUMN */}

            <div className="flex">
                <span className="w-[155px] shrink-0 font-['Poppins'] text-[14px] font-bold leading-[100%] text-black">
                    Name
                </span>

                <span className="font-['Poppins'] text-[14px] leading-[100%] text-[#444]">
                    : {profile.name || "Not provided"}
                </span>
            </div>


            <div className="flex">
                <span className="w-[155px] shrink-0 font-['Poppins'] text-[14px] font-bold leading-[100%] text-black">
                    Mobile Number
                </span>

                <span className="font-['Poppins'] text-[14px] leading-[100%] text-[#444]">
                    : +880 {profile.mobileNumber || ""}
                </span>
            </div>


            <div className="flex">
                <span className="w-[155px] shrink-0 font-['Poppins'] text-[14px] font-bold leading-[100%] text-black">
                    Email
                </span>

                <span className="font-['Poppins'] text-[14px] leading-[100%] text-[#444]">
                    : {profile.email || "Not provided"}
                </span>
            </div>


            <div className="flex">
                <span className="w-[155px] shrink-0 font-['Poppins'] text-[14px] font-bold leading-[100%] text-black">
                    Address
                </span>

                <span className="font-['Poppins'] text-[14px] leading-[100%] text-[#444]">
                    : {profile.address || "Not provided"}
                </span>
            </div>


            <div className="flex">
                <span className="w-[155px] shrink-0 font-['Poppins'] text-[14px] font-bold leading-[100%] text-black">
                    City
                </span>

                <span className="font-['Poppins'] text-[14px] leading-[100%] text-[#444]">
                    : {profile.city || "Not provided"}
                </span>
            </div>


            <div className="flex">
                <span className="w-[155px] shrink-0 font-['Poppins'] text-[14px] font-bold leading-[100%] text-black">
                    Nationality
                </span>

                <span className="font-['Poppins'] text-[14px] leading-[100%] text-[#444]">
                    : {profile.nationality || "Not provided"}
                </span>
            </div>


            <div className="flex">
                <span className="w-[155px] shrink-0 font-['Poppins'] text-[14px] font-bold leading-[100%] text-black">
                    Passport/NID
                </span>

                <span className="font-['Poppins'] text-[14px] leading-[100%] text-[#444]">
                    : {profile.passportOrNid || "Not provided"}
                </span>
            </div>


            <div className="flex">
                <span className="w-[155px] shrink-0 font-['Poppins'] text-[14px] font-bold leading-[100%] text-black">
                    Date of Birth
                </span>

                <span className="font-['Poppins'] text-[14px] leading-[100%] text-[#444]">
                    : {formatDate(profile.dateOfBirth)}
                </span>
            </div>


            <div className="flex">
                <span className="w-[155px] shrink-0 font-['Poppins'] text-[14px] font-bold leading-[100%] text-black">
                    Gender
                </span>

                <span className="font-['Poppins'] text-[14px] leading-[100%] text-[#444]">
                    : {profile.gender || "Not provided"}
                </span>
            </div>


            <div className="flex">
                <span className="w-[155px] shrink-0 font-['Poppins'] text-[14px] font-bold leading-[100%] text-black">
                    Marital Status
                </span>

                <span className="font-['Poppins'] text-[14px] leading-[100%] text-[#444]">
                    : {profile.maritalStatus || "Not provided"}
                </span>
            </div>

        </div>
    );
}