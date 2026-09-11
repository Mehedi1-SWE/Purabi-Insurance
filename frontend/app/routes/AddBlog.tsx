import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function AddBlog() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        content: "",
        image: "",
        category: "Insurance",
        author: "Purabi Insurance",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setLoading(true);
        setMessage("");
        setError("");

        try {
            const response = await fetch(
                "http://localhost:5000/api/blogs",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                setError(
                    result.message || "Failed to create blog."
                );
                return;
            }

            setMessage("Blog created successfully!");

            setFormData({
                title: "",
                description: "",
                content: "",
                image: "",
                category: "Insurance",
                author: "Purabi Insurance",
            });

            setTimeout(() => {
                navigate("/blogs");
            }, 1000);
        } catch (err) {
            console.error("Create blog error:", err);
            setError("Unable to create blog.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[900px] bg-[#faf8f7] px-[80px] py-[70px] font-['Poppins'] text-[#111]">

            <div className="mx-auto w-[900px]">

                {/* Header */}
                <div className="mb-10">

                    <Link
                        to="/blogs"
                        className="text-[13px] text-[#655b57] transition hover:text-[#ac3e25]"
                    >
                        ← Back to Blogs
                    </Link>

                    <h1 className="mt-6 text-[42px] font-semibold tracking-[-1px] text-[#211a18]">
                        Add New Blog
                    </h1>

                    <p className="mt-3 text-[14px] leading-[1.7] text-[#666]">
                        Create a new insurance article for the Purabi Insurance blog.
                    </p>

                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="rounded-[8px] border border-[#eadfdc] bg-white p-8 shadow-[0_8px_28px_rgba(0,0,0,.04)]"
                >

                    {/* Title */}
                    <div>
                        <label className="text-[13px] font-medium text-[#333]">
                            Blog Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter blog title"
                            required
                            className="mt-2 w-full rounded-[5px] border border-[#ddd] px-4 py-3 text-[13px] outline-none transition focus:border-[#ac3e25]"
                        />
                    </div>

                    {/* Description */}
                    <div className="mt-6">

                        <label className="text-[13px] font-medium text-[#333]">
                            Description
                        </label>

                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter short description"
                            required
                            rows={4}
                            className="mt-2 w-full resize-none rounded-[5px] border border-[#ddd] px-4 py-3 text-[13px] outline-none transition focus:border-[#ac3e25]"
                        />

                    </div>

                    {/* Content */}
                    <div className="mt-6">

                        <label className="text-[13px] font-medium text-[#333]">
                            Content
                        </label>

                        <textarea
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            placeholder="Write your blog content"
                            required
                            rows={10}
                            className="mt-2 w-full resize-y rounded-[5px] border border-[#ddd] px-4 py-3 text-[13px] leading-[1.7] outline-none transition focus:border-[#ac3e25]"
                        />

                    </div>

                    {/* Image */}
                    <div className="mt-6">

                        <label className="text-[13px] font-medium text-[#333]">
                            Image URL
                        </label>

                        <input
                            type="url"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="https://example.com/image.jpg"
                            className="mt-2 w-full rounded-[5px] border border-[#ddd] px-4 py-3 text-[13px] outline-none transition focus:border-[#ac3e25]"
                        />

                    </div>

                    {/* Category */}
                    <div className="mt-6">

                        <label className="text-[13px] font-medium text-[#333]">
                            Category
                        </label>

                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-[5px] border border-[#ddd] bg-white px-4 py-3 text-[13px] outline-none transition focus:border-[#ac3e25]"
                        >
                            <option value="Insurance">
                                Insurance
                            </option>

                            <option value="Insurance Guide">
                                Insurance Guide
                            </option>

                            <option value="Protection">
                                Protection
                            </option>

                            <option value="Claims">
                                Claims
                            </option>
                        </select>

                    </div>

                    {/* Author */}
                    <div className="mt-6">

                        <label className="text-[13px] font-medium text-[#333]">
                            Author
                        </label>

                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            placeholder="Author name"
                            required
                            className="mt-2 w-full rounded-[5px] border border-[#ddd] px-4 py-3 text-[13px] outline-none transition focus:border-[#ac3e25]"
                        />

                    </div>

                    {/* Messages */}
                    {message && (
                        <div className="mt-6 rounded-[5px] bg-green-50 px-4 py-3 text-[13px] text-green-700">
                            {message}
                        </div>
                    )}

                    {error && (
                        <div className="mt-6 rounded-[5px] bg-red-50 px-4 py-3 text-[13px] text-red-600">
                            {error}
                        </div>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-7 rounded-[5px] bg-[#ac3e25] px-7 py-3 text-[13px] font-medium text-white transition hover:bg-[#93341f] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading
                            ? "Creating Blog..."
                            : "Create Blog →"}
                    </button>

                </form>

            </div>

        </div>
    );
}