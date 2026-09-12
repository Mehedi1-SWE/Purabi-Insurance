import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormData = {
    name: string;
    mobileNumber: string;
    email: string;
    dateOfBirth: string;
    gender: string;
    maritalStatus: string;
    nationality: string;
    passportOrNid: string;
    address: string;
    city: string;
};

export default function PersonalInformationForm() {
    const navigate = useNavigate();

    const [profileImage, setProfileImage] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<string>("");
    const [showImageUrl, setShowImageUrl] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    // Gallery image upload
    const handleImageUpload = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please select a valid image.");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert("Image size must be less than 5MB.");
            return;
        }

        const imagePreview = URL.createObjectURL(file);

        setProfileImage(imagePreview);
    };

    // Image URL
    const handleImageUrl = () => {
        if (!imageUrl.trim()) {
            alert("Please enter an image URL.");
            return;
        }

        setProfileImage(imageUrl.trim());
    };

    const onSubmit = (data: FormData) => {
        const clientInformation = {
            ...data,
            profileImage,
        };

        console.log("Client Personal Information:", clientInformation);

        // Later this data will be sent to backend API.
        localStorage.setItem(
            "clientPersonalInformation",
            JSON.stringify(clientInformation)
        );

        navigate("/client-portal");
    };

    return (
        <div className="min-h-screen bg-[#F8F8F8] px-5 py-10 md:px-10 lg:px-20">
            <div className="mx-auto max-w-[1200px] rounded-[20px] bg-white px-6 py-8 shadow-sm md:px-10 md:py-10">
                {/* Heading */}
                <div className="mb-8">
                    <h1 className="font-[Poppins] text-[28px] font-semibold text-[#222222] md:text-[32px]">
                        Personal Information
                    </h1>

                    <p className="mt-2 font-[Poppins] text-[14px] text-[#777777]">
                        Please provide your personal information to complete
                        your client profile.
                    </p>
                </div>

                {/* Profile Image */}
                <div className="mb-10 flex flex-col items-center">
                    <div className="relative mb-4 flex h-[130px] w-[130px] items-center justify-center overflow-hidden rounded-full border border-[#D9D9D9] bg-[#F5F5F5]">
                        {profileImage ? (
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <div className="text-center">
                                <svg
                                    width="42"
                                    height="42"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mx-auto text-[#999999]"
                                >
                                    <path
                                        d="M20 21C20 17.134 16.4183 14 12 14C7.58172 14 4 17.134 4 21"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                    />
                                    <circle
                                        cx="12"
                                        cy="7"
                                        r="4"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                    />
                                </svg>

                                <p className="mt-1 font-[Poppins] text-[11px] text-[#999999]">
                                    Profile Photo
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <label className="cursor-pointer rounded-[8px] border border-[#AC3E25] px-5 py-2.5 font-[Poppins] text-[13px] font-medium text-[#AC3E25] transition hover:bg-[#AC3E25] hover:text-white">
                            Upload Photo

                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageUpload}
                            />
                        </label>

                        <button
                            type="button"
                            onClick={() =>
                                setShowImageUrl(!showImageUrl)
                            }
                            className="rounded-[8px] border border-[#D8D8D8] px-5 py-2.5 font-[Poppins] text-[13px] font-medium text-[#555555] transition hover:border-[#AC3E25] hover:text-[#AC3E25]"
                        >
                            Add Image URL
                        </button>
                    </div>

                    {/* Image URL */}
                    {showImageUrl && (
                        <div className="mt-4 flex w-full max-w-[500px] gap-2">
                            <input
                                type="url"
                                value={imageUrl}
                                onChange={(e) =>
                                    setImageUrl(e.target.value)
                                }
                                placeholder="https://example.com/profile.jpg"
                                className="h-[45px] flex-1 rounded-[8px] border border-[#D9D9D9] px-4 font-[Poppins] text-[13px] outline-none focus:border-[#AC3E25]"
                            />

                            <button
                                type="button"
                                onClick={handleImageUrl}
                                className="rounded-[8px] bg-[#AC3E25] px-5 font-[Poppins] text-[13px] font-medium text-white"
                            >
                                Add
                            </button>
                        </div>
                    )}

                    <p className="mt-3 font-[Poppins] text-[11px] text-[#999999]">
                        JPG, JPEG or PNG. Maximum 5MB.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Personal Details */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Full Name */}
                        <div>
                            <label className="mb-2 block font-[Poppins] text-[13px] font-medium text-[#333333]">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your full name"
                                {...register("name", {
                                    required: "Full name is required",
                                })}
                                className="h-[50px] w-full rounded-[8px] border border-[#D9D9D9] px-4 font-[Poppins] text-[13px] outline-none transition focus:border-[#AC3E25]"
                            />

                            {errors.name && (
                                <p className="mt-1 font-[Poppins] text-[11px] text-red-500">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* Mobile Number */}
                        <div>
                            <label className="mb-2 block font-[Poppins] text-[13px] font-medium text-[#333333]">
                                Mobile Number
                            </label>

                            <input
                                type="tel"
                                placeholder="Enter mobile number"
                                {...register("mobileNumber", {
                                    required: "Mobile number is required",
                                })}
                                className="h-[50px] w-full rounded-[8px] border border-[#D9D9D9] px-4 font-[Poppins] text-[13px] outline-none transition focus:border-[#AC3E25]"
                            />

                            {errors.mobileNumber && (
                                <p className="mt-1 font-[Poppins] text-[11px] text-red-500">
                                    {errors.mobileNumber.message}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-2 block font-[Poppins] text-[13px] font-medium text-[#333333]">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="Enter email address"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value:
                                            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message:
                                            "Please enter a valid email",
                                    },
                                })}
                                className="h-[50px] w-full rounded-[8px] border border-[#D9D9D9] px-4 font-[Poppins] text-[13px] outline-none transition focus:border-[#AC3E25]"
                            />

                            {errors.email && (
                                <p className="mt-1 font-[Poppins] text-[11px] text-red-500">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Date of Birth */}
                        <div>
                            <label className="mb-2 block font-[Poppins] text-[13px] font-medium text-[#333333]">
                                Date of Birth
                            </label>

                            <input
                                type="date"
                                {...register("dateOfBirth", {
                                    required: "Date of birth is required",
                                })}
                                className="h-[50px] w-full rounded-[8px] border border-[#D9D9D9] px-4 font-[Poppins] text-[13px] text-[#555555] outline-none transition focus:border-[#AC3E25]"
                            />

                            {errors.dateOfBirth && (
                                <p className="mt-1 font-[Poppins] text-[11px] text-red-500">
                                    {errors.dateOfBirth.message}
                                </p>
                            )}
                        </div>

                        {/* Gender */}
                        <div>
                            <label className="mb-2 block font-[Poppins] text-[13px] font-medium text-[#333333]">
                                Gender
                            </label>

                            <select
                                {...register("gender", {
                                    required: "Gender is required",
                                })}
                                className="h-[50px] w-full rounded-[8px] border border-[#D9D9D9] bg-white px-4 font-[Poppins] text-[13px] text-[#555555] outline-none transition focus:border-[#AC3E25]"
                            >
                                <option value="">Select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>

                            {errors.gender && (
                                <p className="mt-1 font-[Poppins] text-[11px] text-red-500">
                                    {errors.gender.message}
                                </p>
                            )}
                        </div>

                        {/* Marital Status */}
                        <div>
                            <label className="mb-2 block font-[Poppins] text-[13px] font-medium text-[#333333]">
                                Marital Status
                            </label>

                            <select
                                {...register("maritalStatus", {
                                    required:
                                        "Marital status is required",
                                })}
                                className="h-[50px] w-full rounded-[8px] border border-[#D9D9D9] bg-white px-4 font-[Poppins] text-[13px] text-[#555555] outline-none transition focus:border-[#AC3E25]"
                            >
                                <option value="">
                                    Select marital status
                                </option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Divorced">Divorced</option>
                                <option value="Widowed">Widowed</option>
                            </select>

                            {errors.maritalStatus && (
                                <p className="mt-1 font-[Poppins] text-[11px] text-red-500">
                                    {errors.maritalStatus.message}
                                </p>
                            )}
                        </div>

                        {/* Nationality */}
                        <div>
                            <label className="mb-2 block font-[Poppins] text-[13px] font-medium text-[#333333]">
                                Nationality
                            </label>

                            <input
                                type="text"
                                placeholder="Enter nationality"
                                defaultValue="Bangladeshi"
                                {...register("nationality", {
                                    required: "Nationality is required",
                                })}
                                className="h-[50px] w-full rounded-[8px] border border-[#D9D9D9] px-4 font-[Poppins] text-[13px] outline-none transition focus:border-[#AC3E25]"
                            />

                            {errors.nationality && (
                                <p className="mt-1 font-[Poppins] text-[11px] text-red-500">
                                    {errors.nationality.message}
                                </p>
                            )}
                        </div>

                        {/* NID / Passport */}
                        <div>
                            <label className="mb-2 block font-[Poppins] text-[13px] font-medium text-[#333333]">
                                NID / Passport Number
                            </label>

                            <input
                                type="text"
                                placeholder="Enter NID or passport number"
                                {...register("passportOrNid")}
                                className="h-[50px] w-full rounded-[8px] border border-[#D9D9D9] px-4 font-[Poppins] text-[13px] outline-none transition focus:border-[#AC3E25]"
                            />
                        </div>

                        {/* City */}
                        <div>
                            <label className="mb-2 block font-[Poppins] text-[13px] font-medium text-[#333333]">
                                City
                            </label>

                            <input
                                type="text"
                                placeholder="Enter city"
                                {...register("city", {
                                    required: "City is required",
                                })}
                                className="h-[50px] w-full rounded-[8px] border border-[#D9D9D9] px-4 font-[Poppins] text-[13px] outline-none transition focus:border-[#AC3E25]"
                            />

                            {errors.city && (
                                <p className="mt-1 font-[Poppins] text-[11px] text-red-500">
                                    {errors.city.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Address */}
                    <div className="mt-6">
                        <label className="mb-2 block font-[Poppins] text-[13px] font-medium text-[#333333]">
                            Address
                        </label>

                        <textarea
                            rows={4}
                            placeholder="Enter your full address"
                            {...register("address", {
                                required: "Address is required",
                            })}
                            className="w-full resize-none rounded-[8px] border border-[#D9D9D9] px-4 py-3 font-[Poppins] text-[13px] outline-none transition focus:border-[#AC3E25]"
                        />

                        {errors.address && (
                            <p className="mt-1 font-[Poppins] text-[11px] text-red-500">
                                {errors.address.message}
                            </p>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col justify-end gap-3 sm:flex-row">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="h-[50px] rounded-[8px] border border-[#D8D8D8] px-8 font-[Poppins] text-[13px] font-medium text-[#555555] transition hover:border-[#AC3E25] hover:text-[#AC3E25]"
                        >
                            Back
                        </button>

                        <button
                            type="submit"
                            className="h-[50px] rounded-[8px] bg-[#AC3E25] px-10 font-[Poppins] text-[13px] font-medium text-white transition hover:bg-[#8F321E]"
                        >
                            Save & Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}