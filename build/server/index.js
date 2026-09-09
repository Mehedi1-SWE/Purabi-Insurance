import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import react, { useState } from "react";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default,
	links: () => links
});
var links = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			children,
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "pt-16 p-4 container mx-auto",
		children: [
			/* @__PURE__ */ jsx("h1", { children: message }),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
//#endregion
//#region components/shared/Footer.tsx
var navigationLinks = [
	{
		name: "Home",
		path: "/"
	},
	{
		name: "About Us",
		path: "/about"
	},
	{
		name: "Services",
		path: "/services",
		arrow: true
	},
	{
		name: "Claims",
		path: "/claims",
		arrow: true
	},
	{
		name: "Blogs",
		path: "/blogs"
	},
	{
		name: "Pay Premium",
		path: "/pay-premium"
	}
];
var paymentMethods = [
	{
		name: "VISA",
		image: "/visa-logo-png-transparent.png.png"
	},
	{
		name: "Mastercard",
		image: "/Mastercard.png"
	},
	{
		name: "Nagad",
		image: "/Nagad-Logo.wine.png.png"
	},
	{
		name: "bKash",
		image: "/bkash-log-png.png.png"
	},
	{
		name: "Rocket",
		image: "/dutch-bangla-rocket-logo-png_seeklogo.png.png"
	},
	{
		name: "Upay",
		image: "/upay.png.jpg"
	},
	{
		name: "SureCash",
		image: "/surecash-logo-sure-cash-mobile-banking.png.jpg"
	},
	{
		name: "TapTap Send",
		image: "/taptap.png.png"
	},
	{
		name: "CellFin",
		image: "/cellfin.png.png"
	},
	{
		name: "Dutch-Bangla Bank",
		image: "/Dutch-Bangla-Bank-ltd.png.png"
	},
	{
		name: "City Bank",
		image: "/city-bank-logo.png.png"
	},
	{
		name: "Islami Bank",
		image: "/islami-bank-bangladesh.png.png"
	},
	{
		name: "BRAC Bank",
		image: "/Brac-Bank-Logo.png.png"
	},
	{
		name: "UCB",
		image: "/united-commercial-bank-UCB.png.png"
	},
	{
		name: "EBL",
		image: "/simple-math.png.png"
	}
];
var legalLinks = [
	{
		name: "Terms & Condition",
		path: "/terms-and-conditions"
	},
	{
		name: "Privacy & Policy",
		path: "/privacy-policy"
	},
	{
		name: "Refund Policy",
		path: "/refund-policy"
	}
];
function ArrowIcon$1() {
	return /* @__PURE__ */ jsx("svg", {
		width: "9",
		height: "9",
		viewBox: "0 0 10 10",
		fill: "none",
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsx("path", {
			d: "M1 9L9 1M9 1H2.5M9 1V7.5",
			stroke: "currentColor",
			strokeWidth: "1.2",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
function DropdownArrow() {
	return /* @__PURE__ */ jsx("svg", {
		width: "9",
		height: "9",
		viewBox: "0 0 10 10",
		fill: "none",
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsx("path", {
			d: "M2 3.5L5 6.5L8 3.5",
			stroke: "currentColor",
			strokeWidth: "1.2",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
function SocialIcons() {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-[22px] w-[133.96px] items-center justify-between text-[#444444]",
		children: [
			/* @__PURE__ */ jsx("a", {
				href: "https://www.facebook.com/",
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": "Facebook",
				className: "transition hover:text-[#AC3E25]",
				children: /* @__PURE__ */ jsx("svg", {
					width: "18",
					height: "18",
					viewBox: "0 0 24 24",
					fill: "currentColor",
					children: /* @__PURE__ */ jsx("path", { d: "M14.5 21v-6.8h2.4l.4-2.8h-2.8V9.6c0-.8.2-1.4 1.5-1.4h1.5V5.5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2H9v2.8h2.3V21h3.2Z" })
				})
			}),
			/* @__PURE__ */ jsx("a", {
				href: "https://x.com/",
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": "X",
				className: "transition hover:text-[#AC3E25]",
				children: /* @__PURE__ */ jsx("svg", {
					width: "18",
					height: "18",
					viewBox: "0 0 24 24",
					fill: "currentColor",
					children: /* @__PURE__ */ jsx("path", { d: "M18.9 2H22l-6.8 7.8L23.2 22H17l-4.9-6.4L6.4 22H3.3l7.3-8.3L2.8 2h6.4l4.4 5.8L18.9 2Zm-1.1 17.9h1.7L8.3 4.1H6.5L17.8 19.9Z" })
				})
			}),
			/* @__PURE__ */ jsx("a", {
				href: "https://www.instagram.com/",
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": "Instagram",
				className: "transition hover:text-[#AC3E25]",
				children: /* @__PURE__ */ jsxs("svg", {
					width: "18",
					height: "18",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "1.8",
					children: [
						/* @__PURE__ */ jsx("rect", {
							x: "3",
							y: "3",
							width: "18",
							height: "18",
							rx: "5"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "12",
							cy: "12",
							r: "4"
						}),
						/* @__PURE__ */ jsx("circle", {
							cx: "17.3",
							cy: "6.7",
							r: "1",
							fill: "currentColor",
							stroke: "none"
						})
					]
				})
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "w-full bg-white",
		children: /* @__PURE__ */ jsxs("div", {
			className: "\n          mx-auto\n          flex\n          min-h-[723px]\n          w-full\n          max-w-[1920px]\n          flex-col\n          items-center\n          bg-[linear-gradient(180deg,rgba(172,62,37,0)_0%,rgba(172,62,37,0.1)_100%)]\n          px-[80px]\n          pb-[50px]\n          pt-[100px]\n        ",
			children: [
				/* @__PURE__ */ jsxs("section", {
					className: "flex h-[173px] w-[1760px] flex-col items-center",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "font-[Poppins] text-[12px] font-normal leading-[100%] text-[#777777]",
							children: "Are you ready?"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-[10px] h-[72px] w-[1760px] text-center font-[Poppins] text-[48px] font-bold leading-[100%] tracking-[-0.44px] text-black",
							children: "Get Your Insurance Now!"
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/quote",
							className: "\n              mt-[18px]\n              flex\n              h-[55px]\n              w-[250px]\n              items-center\n              justify-center\n              gap-[20px]\n              rounded-[5px]\n              border\n              border-[#00000033]\n              bg-[#AC3E25]\n              px-[24px]\n              py-[14px]\n              font-[Poppins]\n              text-[18px]\n              font-medium\n              leading-[100%]\n              text-white\n              transition\n              hover:bg-[#922F1C]\n            ",
							children: [/* @__PURE__ */ jsx("span", { children: "Buy Now" }), /* @__PURE__ */ jsx(ArrowIcon$1, {})]
						})
					]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "mt-[40px] flex h-[55px] w-[1760px] items-center justify-center",
					children: /* @__PURE__ */ jsx("div", {
						className: "flex h-[55px] items-center gap-[20px]",
						children: navigationLinks.map((link) => /* @__PURE__ */ jsxs(Link, {
							to: link.path,
							className: "\n                  flex\n                  h-[55px]\n                  items-center\n                  justify-center\n                  gap-[8px]\n                  px-[20px]\n                  py-[14px]\n                  font-[Poppins]\n                  text-[13px]\n                  font-normal\n                  leading-[100%]\n                  text-black\n                  transition\n                  hover:text-[#AC3E25]\n                ",
							children: [link.name, link.arrow && /* @__PURE__ */ jsx(DropdownArrow, {})]
						}, link.path))
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-[40px] flex h-[76px] w-[347px] flex-col items-center justify-between",
					children: [/* @__PURE__ */ jsx(SocialIcons, {}), /* @__PURE__ */ jsx("p", {
						className: "h-[24px] w-[347px] font-[Poppins] text-[20px] font-normal leading-[24px] text-black",
						children: "Sunday to Thursday : 10 AM to 6 PM"
					})]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mt-[40px] flex h-[144px] w-[1280px] flex-col gap-[10px]",
					children: [/* @__PURE__ */ jsx("p", {
						className: "h-[18px] w-[111px] shrink-0 font-[Poppins] text-[12px] font-normal leading-[100%] tracking-[-0.2px] text-[#444444]",
						children: "Payment Channels"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex h-[116px] w-[1280px] flex-col gap-[20px]",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-[48px] w-full items-center justify-start gap-[20px]",
							children: paymentMethods.slice(0, 11).map((payment) => /* @__PURE__ */ jsx("div", {
								className: "flex h-[48px] w-[98.67px] shrink-0 items-center justify-center rounded-[5px] border border-[#AC3E2533] bg-white",
								children: /* @__PURE__ */ jsx("img", {
									src: payment.image,
									alt: payment.name,
									className: "block max-h-[30px] max-w-[72px] object-contain"
								})
							}, payment.name))
						}), /* @__PURE__ */ jsx("div", {
							className: "flex h-[48px] w-full items-center justify-center gap-[20px]",
							children: paymentMethods.slice(11).map((payment) => /* @__PURE__ */ jsx("div", {
								className: "flex h-[48px] w-[98.67px] shrink-0 items-center justify-center rounded-[5px] border border-[#AC3E2533] bg-white",
								children: /* @__PURE__ */ jsx("img", {
									src: payment.image,
									alt: payment.name,
									className: "block max-h-[30px] max-w-[72px] object-contain"
								})
							}, payment.name))
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-[40px] flex h-[23px] w-[1760px] items-center",
					children: [/* @__PURE__ */ jsxs("p", {
						className: "font-[Poppins] text-[15px] font-normal leading-[100%] tracking-[-0.2px] text-[#444444]",
						children: [
							"Copyright ©",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "font-bold text-[#AC3E25]",
								children: "360D Soul Limited"
							}),
							" ",
							"2025. All rights reserved."
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "ml-auto flex items-center gap-[30px]",
						children: legalLinks.map((link) => /* @__PURE__ */ jsx(Link, {
							to: link.path,
							className: "\n                  font-[Poppins]\n                  text-[15px]\n                  font-normal\n                  leading-[100%]\n                  tracking-[-0.2px]\n                  text-[#444444]\n                  transition\n                  hover:text-[#AC3E25]\n                ",
							children: link.name
						}, link.path))
					})]
				})
			]
		})
	});
}
//#endregion
//#region components/shared/Navbar.tsx
function Navbar() {
	return /* @__PURE__ */ jsx("nav", {
		className: "h-[83px] w-full bg-white",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex h-full items-center justify-between px-[80px] py-[14px]",
			children: [/* @__PURE__ */ jsx(Link, {
				to: "/",
				children: /* @__PURE__ */ jsx("div", {
					className: "h-[46.22px] w-[184.35px] bg-[#AB3D25]",
					children: /* @__PURE__ */ jsx("img", {
						src: "/logo.png",
						alt: "Purabi General Insurance Co. Ltd.",
						className: "h-full w-full object-contain"
					})
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-5",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "text-[13px]",
						children: "Home"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/about",
						className: "text-[13px]",
						children: "About Us"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/services",
						className: "text-[13px]",
						children: "Services"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/claims",
						className: "text-[13px]",
						children: "Claims"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/blogs",
						className: "text-[13px]",
						children: "Blogs"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/contact",
						className: "text-[13px]",
						children: "Contact Us"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/quote",
						className: "bg-[#AC3E25] px-6 py-3 text-[13px] font-medium text-white",
						children: "Get A Quote"
					})
				]
			})]
		})
	});
}
//#endregion
//#region components/shared/Topbar.tsx
var socialLinks = [
	{
		name: "Facebook",
		href: "https://www.facebook.com/",
		icon: /* @__PURE__ */ jsx("svg", {
			width: "16",
			height: "16",
			viewBox: "0 0 24 24",
			fill: "white",
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsx("path", { d: "M14.5 8H17V4.5h-2.5C11.46 4.5 10 6.08 10 9v2H7v3.5h3V21h3.5v-6.5H16L17 11h-3.5V9c0-.67.33-1 1-1Z" })
		})
	},
	{
		name: "Twitter",
		href: "https://twitter.com/",
		icon: /* @__PURE__ */ jsx("svg", {
			width: "16",
			height: "16",
			viewBox: "0 0 24 24",
			fill: "white",
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsx("path", { d: "M22 5.92c-.65.29-1.34.49-2.07.58.75-.45 1.32-1.16 1.59-2.01-.7.42-1.47.72-2.29.88A3.59 3.59 0 0 0 13 8.65c0 .28.03.56.09.82A10.2 10.2 0 0 1 3.68 4.9a3.58 3.58 0 0 0 1.11 4.8A3.6 3.6 0 0 1 3.16 9.3v.05a3.59 3.59 0 0 0 2.88 3.52c-.35.1-.73.15-1.11.15-.27 0-.53-.03-.78-.08a3.6 3.6 0 0 0 3.36 2.49A7.22 7.22 0 0 1 3 16.97c-.3 0-.6-.02-.9-.05a10.18 10.18 0 0 0 5.51 1.62c6.61 0 10.23-5.48 10.23-10.23 0-.16 0-.31-.01-.47.7-.5 1.31-1.15 1.79-1.92Z" })
		})
	},
	{
		name: "YouTube",
		href: "https://www.youtube.com/",
		icon: /* @__PURE__ */ jsx("svg", {
			width: "16",
			height: "16",
			viewBox: "0 0 24 24",
			fill: "white",
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsx("path", { d: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.5 15.6V8.4l6.2 3.6-6.2 3.6Z" })
		})
	},
	{
		name: "Instagram",
		href: "https://www.instagram.com/",
		icon: /* @__PURE__ */ jsxs("svg", {
			width: "16",
			height: "16",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "white",
			strokeWidth: "2",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ jsx("rect", {
					x: "3",
					y: "3",
					width: "18",
					height: "18",
					rx: "5"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "12",
					cy: "12",
					r: "4"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "17.5",
					cy: "6.5",
					r: "1",
					fill: "white",
					stroke: "none"
				})
			]
		})
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/",
		icon: /* @__PURE__ */ jsx("svg", {
			width: "16",
			height: "16",
			viewBox: "0 0 24 24",
			fill: "white",
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsx("path", { d: "M6 8H2.5v13.5H6V8ZM4.25 2A2.25 2.25 0 1 0 4.25 6.5 2.25 2.25 0 0 0 4.25 2ZM21.5 13.75c0-4.01-2.14-5.88-5-5.88-2.31 0-3.34 1.27-3.92 2.16V8H9.1v13.5h3.48v-6.69c0-1.76.33-3.47 2.52-3.47 2.15 0 2.18 2.02 2.18 3.59v6.57h3.49v-7.75Z" })
		})
	}
];
function Topbar() {
	return /* @__PURE__ */ jsx("div", {
		className: "h-[50px] w-full bg-[#AC3E25] text-white",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex h-full w-full items-center justify-between px-[80px] py-[8px]",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex h-[18px] w-[640px] items-center gap-[10px]",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex h-[18px] w-[407px] shrink-0 items-center gap-[10px]",
					children: [/* @__PURE__ */ jsx("img", {
						src: "/Vector (3).png",
						alt: "",
						className: "h-[12px] w-[9px] shrink-0"
					}), /* @__PURE__ */ jsx("span", {
						className: "h-[18px] w-[385px] max-w-[400px] whitespace-nowrap font-[Poppins] text-[12px] font-medium capitalize leading-[100%] tracking-[0%] text-white",
						children: "Sandhani Life Tower (2nd Floor), 34 Bangla Motor, Dhaka - 1000."
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex h-[18px] w-[200px] shrink-0 items-center gap-[10px]",
					children: [/* @__PURE__ */ jsx("img", {
						src: "/email-14_svgrepo.com.png",
						alt: "",
						className: "h-[12px] w-[12px] shrink-0"
					}), /* @__PURE__ */ jsx("a", {
						href: "mailto:purabiinsurance@gmail.com",
						className: "h-[18px] w-[178px] whitespace-nowrap font-[Poppins] text-[12px] font-medium lowercase leading-[100%] tracking-[0%] text-white",
						children: "purabiinsurance@gmail.com"
					})]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex h-[34px] w-[640px] shrink-0 items-center gap-[20px]",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex h-[18px] shrink-0 items-center gap-[10px]",
						children: [/* @__PURE__ */ jsx("img", {
							src: "/Vector (4).png",
							alt: "",
							className: "h-[9.5px] w-[9.5px] shrink-0"
						}), /* @__PURE__ */ jsx("a", {
							href: "tel:+8801714044146",
							className: "h-[18px] w-[108px] whitespace-nowrap font-[Poppins] text-[12px] font-medium uppercase leading-[100%] tracking-[0%] text-white",
							children: "+880 1714-044146"
						})]
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/agent-portal",
						className: "flex h-[24px] w-[114px] shrink-0 items-center justify-center whitespace-nowrap text-center font-[Poppins] text-[16px] font-normal uppercase leading-[100%] tracking-[0%] text-white",
						children: "CLIENT PORTAL"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/sign-up",
						className: "flex h-[24px] w-[114px] shrink-0 items-center justify-center whitespace-nowrap text-center font-[Poppins] text-[16px] font-normal uppercase leading-[100%] tracking-[0%] text-white",
						children: "AGENT PORTAL"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex h-[30px] w-[190px] shrink-0 items-center gap-[10px]",
						children: socialLinks.map((social) => /* @__PURE__ */ jsx("a", {
							href: social.href,
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": social.name,
							className: "flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-white/20 transition hover:bg-white/30",
							children: social.icon
						}, social.name))
					})
				]
			})]
		})
	});
}
//#endregion
//#region app/layouts/MainLayouts.tsx
var MainLayouts_exports = /* @__PURE__ */ __exportAll({ default: () => MainLayouts_default });
var MainLayouts_default = UNSAFE_withComponentProps(function MainLayouts() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Topbar, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Outlet, {}) }),
		/* @__PURE__ */ jsx(Footer, {})
	] });
});
//#endregion
//#region components/Category.tsx
var categories = [
	{
		title: "Fire Insurance",
		description: "With our Fire insurance policies, you can choose from various coverage options that protect your property, equipment,",
		image: "/flame.png.png"
	},
	{
		title: "Health Insurance",
		description: "With our Health insurance policies, you can choose from various coverage options that protect your property, equipment,",
		image: "/healthcare.png.png"
	},
	{
		title: "Motor Insurance",
		description: "Motor Car insurance provides comprehensive protection for your vehicles, covering accidents, theft.",
		image: "/protection.png.png"
	},
	{
		title: "Marine Insurance",
		description: "We offer comprehensive and flexible coverage for your vessels, protecting against physical damage,",
		image: "/logistics-delivery.png.png"
	},
	{
		title: "Travel Insurance",
		description: "Our Travel Insurance (Overseas Mediclaim Insurance) ensures comprehensive coverage for medical emergencies.",
		image: "/travel-insurance.png.png"
	},
	{
		title: "Engineering Insurance",
		description: "Engineering insurance provides protection for machinery, equipment, and engineering projects against unexpected damage.",
		image: "/protection.png.png"
	},
	{
		title: "Aviation Insurance",
		description: "Aviation insurance provides coverage for aircraft and related risks, including accidental damage and liability.",
		image: "/logistics-delivery.png.png"
	}
];
function ArrowIcon() {
	return /* @__PURE__ */ jsx("svg", {
		width: "16.77",
		height: "16.77",
		viewBox: "0 0 17 17",
		fill: "none",
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsx("path", {
			d: "M2.2 14.8L14.8 2.2M14.8 2.2H5.5M14.8 2.2V11.5",
			stroke: "#FFFFFF",
			strokeWidth: "1.46",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
function Category() {
	const [showMore, setShowMore] = useState(false);
	const visibleCategories = showMore ? categories : categories.slice(0, 5);
	const extraCategories = showMore ? categories.slice(5) : [];
	return /* @__PURE__ */ jsx("section", {
		className: "w-full bg-white p-[80px]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex w-[1760px] flex-col gap-[60px]",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex h-[134px] w-[1760px] flex-col items-center",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "h-[72px] w-[659px] whitespace-nowrap text-center font-[Poppins] text-[48px] font-semibold uppercase leading-[100%] tracking-[0%] text-black",
						children: "CATEGORIES OF INSURANCE"
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-[10px] flex h-[42px] w-[1760px] items-center justify-center px-[10px]",
						children: /* @__PURE__ */ jsx("p", {
							className: "h-[42px] w-[1280px] text-center font-[Poppins] text-[14px] font-normal leading-[100%] tracking-[0%] text-[#000000B2]",
							children: "At SIPLC, we exceed customer expectations by being available both physically and virtually on their preferred channels. As a leading general insurer in Bangladesh, we are committed to continuous development and improvement, ensuring every citizen can access insurance benefits without hindrance"
						})
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "w-[1760px]",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex gap-[27px]",
						children: visibleCategories.slice(0, 5).map((category) => /* @__PURE__ */ jsxs("article", {
							className: "relative h-[252.292px] w-[350px] shrink-0 rounded-[21.88px] bg-[#F7ECEA]",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "absolute left-[33.54px] top-[16.04px] flex h-[184.48px] w-[282.92px] flex-col items-center text-center",
									children: [
										/* @__PURE__ */ jsx("img", {
											src: category.image,
											alt: category.title,
											className: "h-[60px] w-[60px] object-contain"
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "mt-[7.29px] h-[27px] whitespace-nowrap font-[Poppins] text-[18px] font-bold uppercase leading-[100%] tracking-[0%] text-black",
											children: category.title
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-[7.29px] h-[54px] w-[268.33px] font-[Poppins] text-[12px] font-normal leading-[100%] tracking-[0%] text-[#000000B2]",
											children: category.description
										})
									]
								}),
								/* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1/2 h-[34px] w-[82px] -translate-x-1/2 rounded-t-full bg-white" }),
								/* @__PURE__ */ jsx("button", {
									type: "button",
									"aria-label": `View ${category.title}`,
									className: "absolute left-1/2 top-[222.4px] z-10 flex h-[59.79px] w-[59.79px] -translate-x-1/2 items-center justify-center rounded-full bg-[#AC3E25]",
									children: /* @__PURE__ */ jsx(ArrowIcon, {})
								})
							]
						}, category.title))
					}), showMore && /* @__PURE__ */ jsx("div", {
						className: "mt-[27px] flex justify-center gap-[27px]",
						children: extraCategories.map((category) => /* @__PURE__ */ jsxs("article", {
							className: "relative h-[252.292px] w-[350px] shrink-0 rounded-[21.88px] bg-[#F7ECEA]",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "absolute left-[33.54px] top-[16.04px] flex h-[184.48px] w-[282.92px] flex-col items-center text-center",
									children: [
										/* @__PURE__ */ jsx("img", {
											src: category.image,
											alt: category.title,
											className: "h-[60px] w-[60px] object-contain"
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "mt-[7.29px] h-[27px] whitespace-nowrap font-[Poppins] text-[18px] font-bold uppercase leading-[100%] tracking-[0%] text-black",
											children: category.title
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-[7.29px] h-[54px] w-[268.33px] font-[Poppins] text-[12px] font-normal leading-[100%] tracking-[0%] text-[#000000B2]",
											children: category.description
										})
									]
								}),
								/* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1/2 h-[34px] w-[82px] -translate-x-1/2 rounded-t-full bg-white" }),
								/* @__PURE__ */ jsx("button", {
									type: "button",
									"aria-label": `View ${category.title}`,
									className: "absolute left-1/2 top-[222.4px] z-10 flex h-[59.79px] w-[59.79px] -translate-x-1/2 items-center justify-center rounded-full bg-[#AC3E25]",
									children: /* @__PURE__ */ jsx(ArrowIcon, {})
								})
							]
						}, category.title))
					})]
				}),
				/* @__PURE__ */ jsxs("button", {
					type: "button",
					onClick: () => setShowMore(!showMore),
					className: "mx-auto flex h-[57px] w-[242.8px] items-center justify-center gap-[15.71px] rounded-[5px] border border-[#AC3E2533] bg-[#AC3E25] px-[30px] py-[15px] font-[Poppins] text-[12px] font-medium leading-[100%] tracking-[0%] text-white transition hover:bg-[#922F1C]",
					children: [showMore ? "Show Less" : "See More", /* @__PURE__ */ jsx(ArrowIcon, {})]
				})
			]
		})
	});
}
//#endregion
//#region components/ClaimsTracker.tsx
function ClaimsTracker() {
	return /* @__PURE__ */ jsx("section", {
		className: "w-full bg-white",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-[499.79px] w-full min-w-[1280px] max-w-[1920px] items-center px-[80px] py-[50px]",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative h-[399.79px] w-[500px] shrink-0",
				children: [/* @__PURE__ */ jsx("img", {
					src: "/Group 5.png",
					alt: "",
					className: "absolute left-[139.72px] top-[50px] h-[399.3px] w-[278.69px] object-contain opacity-30"
				}), /* @__PURE__ */ jsx("img", {
					src: "/ClaimsTracker.png",
					alt: "Family insurance",
					className: "absolute left-0 top-[60px] h-[339.61px] w-[500px] object-contain"
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex h-[314px] w-[780px] shrink-0 flex-col rounded-[20px] border border-[#00000033] bg-[#AC3E251A] px-[40px] py-[50px]",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "font-[Poppins] text-[14px] font-semibold uppercase leading-[100%] text-[#444444]",
						children: "BE HAPPY TO GET INSURANCE"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-[25px] font-[Poppins] text-[40px] font-bold leading-[100%] text-[#444444]",
						children: "Start Tracking Your Claims"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-[15px] w-[700px] font-[Poppins] text-[16px] font-normal leading-[150%] text-[#555555]",
						children: "Enjoy peace of mind with hassle-free insurance. Track your claims effortlessly and stay informed every step of the way."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-[25px] flex h-[50px] items-center",
						children: [
							/* @__PURE__ */ jsxs(Link, {
								to: "/claims",
								className: "flex h-[50px] w-[213px] shrink-0 items-center justify-between rounded-[5px] bg-[#AC3E25] px-[20px] font-[Poppins] text-[16px] font-medium leading-[100%] text-white transition hover:bg-[#922F1C]",
								children: [/* @__PURE__ */ jsx("span", { children: "Claim Coverage" }), /* @__PURE__ */ jsx("span", {
									className: "text-[22px] leading-none",
									children: "↗"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ml-[18px] flex items-center gap-[14px]",
								children: [
									/* @__PURE__ */ jsx("span", { className: "h-px w-[34px] bg-[#AC3E25]" }),
									/* @__PURE__ */ jsx("span", {
										className: "font-[Poppins] text-[12px] font-semibold leading-[100%] text-black",
										children: "OR"
									}),
									/* @__PURE__ */ jsx("span", { className: "h-px w-[34px] bg-[#AC3E25]" })
								]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "ml-[18px] whitespace-nowrap font-[Poppins] text-[10px] font-normal leading-[100%] text-[#999999]",
								children: ["Mail Us Anytime:", /* @__PURE__ */ jsx("a", {
									href: "mailto:purabiinsurance@gmail.com",
									className: "ml-[4px] font-semibold text-[#444444]",
									children: "purabiinsurance@gmail.com"
								})]
							})
						]
					})
				]
			})]
		})
	});
}
//#endregion
//#region components/home/Hero.tsx
function Hero() {
	const [showVideo, setShowVideo] = useState(false);
	return /* @__PURE__ */ jsxs("section", {
		className: "relative min-h-[800px] overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: "/hero.png.jpg",
				alt: "Purabi General Insurance",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50" }),
			/* @__PURE__ */ jsx("div", {
				className: "container relative mx-auto flex min-h-[800px] items-center px-5 lg:px-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "space-y-[45px]",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "w-[879px]",
							children: [/* @__PURE__ */ jsx("p", {
								className: "mb-5 text-[12px] font-medium text-white",
								children: "Protecting Value Through Innovation"
							}), /* @__PURE__ */ jsx("h1", {
								className: "text-[52px] font-medium leading-[45px] text-white",
								children: "Leading Insurance Solutions for Your Peace of Mind"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "w-[650px] text-sm leading-6 text-white",
							children: "Purabi General Insurance Company Limited (PGICL), established in 1988, is a leading insurer in Bangladesh, providing comprehensive asset protection for corporate organizations."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-5",
							children: [/* @__PURE__ */ jsx(Link, {
								to: "/about",
								className: "bg-[#AC3E25] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#922F1C]",
								children: "Discover More"
							}), /* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: () => setShowVideo(true),
								className: "flex cursor-pointer items-center gap-3 text-sm font-medium text-white",
								children: [/* @__PURE__ */ jsx("span", {
									className: "flex h-9 w-9 items-center justify-center rounded-full border border-white",
									children: "▶"
								}), "Watch Video"]
							})]
						})
					]
				})
			}),
			showVideo && /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5",
				onClick: () => setShowVideo(false),
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative w-full max-w-4xl",
					onClick: (event) => event.stopPropagation(),
					children: [/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setShowVideo(false),
						className: "absolute -top-10 right-0 cursor-pointer text-2xl text-white",
						"aria-label": "Close video",
						children: "×"
					}), /* @__PURE__ */ jsx("video", {
						src: "/insurance-video.mp4",
						controls: true,
						autoPlay: true,
						className: "w-full rounded-lg"
					})]
				})
			})
		]
	});
}
//#endregion
//#region components/home/WorkingProcess.tsx
function WorkingProcess() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative h-[937.1898px] w-full min-w-[1280px] max-w-[1920px] overflow-hidden bg-cover bg-center",
		style: { backgroundImage: "url(\"/Background2.png\")" },
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[#00000033]" }), /* @__PURE__ */ jsx("div", {
			className: "relative z-10 flex h-full w-full items-center justify-center p-[80px]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "\r\n                        flex\r\n                        h-[777.1898px]\r\n                        w-[1280px]\r\n                        flex-col\r\n                        gap-[50px]\r\n                        overflow-hidden\r\n                        rounded-[20px]\r\n                        border\r\n                        border-[#FFFFFF80]\r\n                        bg-[linear-gradient(0deg,rgba(172,62,37,0.1)_0%,rgba(255,255,255,0)_100%)]\r\n                        p-[80px]\r\n                        backdrop-blur-[40px]\r\n                    ",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex h-[162px] w-[1120px] shrink-0 flex-col items-center gap-[10px]",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex h-[16px] w-[271px] shrink-0 items-center justify-center gap-[4px]",
							children: [
								/* @__PURE__ */ jsx("span", { className: "h-px w-[29px] shrink-0 bg-white" }),
								/* @__PURE__ */ jsx("p", {
									className: "h-[16px] whitespace-nowrap font-[Poppins] text-[11px] font-medium uppercase leading-[16px] text-white",
									children: "Insurance Simplified"
								}),
								/* @__PURE__ */ jsx("span", { className: "h-px w-[29px] shrink-0 bg-white" })
							]
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "flex h-[68px] w-[548px] shrink-0 items-center justify-center whitespace-nowrap text-center font-[Poppins] text-[45px] font-bold uppercase leading-[100%] tracking-[0%] text-white",
							children: "OUR WORKING PROCESS"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "h-[48px] w-[825px] shrink-0 text-center align-middle font-[Poppins] text-[14px] font-normal not-italic leading-[24px] tracking-[0%] text-white",
							children: "Our process makes insurance simple and stress-free, from personalized consultations and tailored solutions to swift activation and ongoing support. We ensure reliable protection and hassle-free claims every step of the way."
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex h-[405.1898px] w-[1130px] shrink-0 items-start justify-center gap-[25px]",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex h-[405.1898px] w-[360px] shrink-0 flex-col items-center",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex h-[289.8px] w-[208.8px] shrink-0 flex-col items-center gap-[7px]",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "flex h-[208.8px] w-[208.8px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-white",
										children: /* @__PURE__ */ jsx("img", {
											src: "/process-1.jpg.png",
											alt: "Get A Quotation",
											className: "h-[166.8px] w-[166.8px] shrink-0 rounded-full object-cover"
										})
									}),
									/* @__PURE__ */ jsx("span", { className: "h-[15px] w-[20px] shrink-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white" }),
									/* @__PURE__ */ jsx("div", {
										className: "flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[100px] bg-[#AC3E25] shadow-[inset_-1px_1px_4px_0px_#00000026]",
										children: /* @__PURE__ */ jsx("span", {
											className: "font-[Poppins] text-[13px] font-medium leading-[100%] text-white",
											children: "01"
										})
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "mt-[16px] flex h-[90.39px] w-[360px] shrink-0 flex-col items-center gap-[16px]",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "h-[27px] w-[277px] shrink-0 whitespace-nowrap text-center font-[Poppins] text-[22px] font-semibold leading-[26.4px] tracking-[0%] text-white",
									children: "Get A Quotation"
								}), /* @__PURE__ */ jsxs("p", {
									className: "h-[48px] w-[276px] shrink-0 text-center font-[Poppins] text-[16px] font-normal leading-[24px] tracking-[0%] text-white",
									children: [
										"Answer a couple of questions, we'll",
										/* @__PURE__ */ jsx("br", {}),
										"provide accurate live quotes."
									]
								})]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex h-[405.1898px] w-[360px] shrink-0 flex-col items-center",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex h-[289.8px] w-[208.8px] shrink-0 flex-col items-center gap-[7px]",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "flex h-[208.8px] w-[208.8px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-white",
										children: /* @__PURE__ */ jsx("img", {
											src: "/process-2.jpg.png",
											alt: "Complete The Application",
											className: "h-[166.8px] w-[166.8px] shrink-0 rounded-full object-cover"
										})
									}),
									/* @__PURE__ */ jsx("span", { className: "h-[15px] w-[20px] shrink-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white" }),
									/* @__PURE__ */ jsx("div", {
										className: "flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[100px] bg-[#AC3E25] shadow-[inset_-1px_1px_4px_0px_#00000026]",
										children: /* @__PURE__ */ jsx("span", {
											className: "font-[Poppins] text-[13px] font-medium leading-[100%] text-white",
											children: "02"
										})
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "mt-[16px] flex h-[90.39px] w-[360px] shrink-0 flex-col items-center gap-[16px]",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "h-[27px] w-[277px] shrink-0 whitespace-nowrap text-center font-[Poppins] text-[22px] font-semibold leading-[26.4px] tracking-[0%] text-white",
									children: "Complete The Application"
								}), /* @__PURE__ */ jsxs("p", {
									className: "h-[48px] w-[276px] shrink-0 text-center align-middle font-[Poppins] text-[16px] font-normal not-italic leading-[24px] tracking-[0%] text-white",
									children: [
										"Answer a couple of questions, we'll",
										/* @__PURE__ */ jsx("br", {}),
										"provide accurate live quotes."
									]
								})]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex h-[405.1898px] w-[360px] shrink-0 flex-col items-center",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex h-[289.8px] w-[208.8px] shrink-0 flex-col items-center gap-[7px]",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "flex h-[208.8px] w-[208.8px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-white",
										children: /* @__PURE__ */ jsx("img", {
											src: "/process-3.jpg.png",
											alt: "Get your Insurance",
											className: "h-[166.8px] w-[166.8px] shrink-0 rounded-full object-cover"
										})
									}),
									/* @__PURE__ */ jsx("span", { className: "h-[15px] w-[20px] shrink-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white" }),
									/* @__PURE__ */ jsx("div", {
										className: "flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[100px] bg-[#AC3E25] shadow-[inset_-1px_1px_4px_0px_#00000026]",
										children: /* @__PURE__ */ jsx("span", {
											className: "font-[Poppins] text-[13px] font-medium leading-[100%] text-white",
											children: "03"
										})
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "mt-[16px] flex h-[90.39px] w-[360px] shrink-0 flex-col items-center gap-[16px]",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "h-[27px] w-[277px] shrink-0 whitespace-nowrap text-center font-[Poppins] text-[22px] font-semibold leading-[26.4px] tracking-[0%] text-white",
									children: "Get your Insurance"
								}), /* @__PURE__ */ jsxs("p", {
									className: "h-[48px] w-[276px] shrink-0 text-center font-[Poppins] text-[16px] font-normal leading-[24px] tracking-[0%] text-white",
									children: [
										"Answer a couple of questions, we'll",
										/* @__PURE__ */ jsx("br", {}),
										"provide accurate live quotes."
									]
								})]
							})]
						})
					]
				})]
			})
		})]
	});
}
//#endregion
//#region components/MobileApp.tsx
function MobileApp() {
	return /* @__PURE__ */ jsx("section", {
		className: "h-[654.3424px] w-[1440px] px-[80px] py-[50px]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex h-[554.3424px] w-[1280px] flex-col items-center gap-[30px] overflow-hidden rounded-[20px] border border-[#00000033] bg-[linear-gradient(180deg,rgba(172,62,37,0)_0%,rgba(172,62,37,0.1)_100%)] pt-[50px]",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "h-[148.39px] w-[1036px]",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "flex h-[15.39px] w-full items-center justify-center",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-[15px]",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "h-[1px] w-[40px]",
										style: { background: "linear-gradient(0deg, #AC3E25 0%, #9F0101 100%)" }
									}),
									/* @__PURE__ */ jsx("span", {
										className: "whitespace-nowrap font-['Poppins'] text-[14px] font-semibold uppercase leading-[15.4px]",
										style: {
											background: "linear-gradient(0deg, #AC3E25 0%, #9F0101 100%)",
											WebkitBackgroundClip: "text",
											WebkitTextFillColor: "transparent"
										},
										children: "GET OUR MOBILE APP"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "h-[1px] w-[40px]",
										style: { background: "linear-gradient(0deg, #AC3E25 0%, #9F0101 100%)" }
									})
								]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mx-auto flex h-[88px] w-[681px] items-center justify-center py-[10px]",
							children: /* @__PURE__ */ jsx("h1", {
								className: "whitespace-nowrap text-center font-['Poppins'] text-[45px] font-bold uppercase leading-[100%] text-black",
								children: "EXPERIENCED OUR MOBILE APP"
							})
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "h-[45px] w-[1036px] text-center font-['Poppins'] text-[14px] font-normal leading-[24px] text-[#000000B2]",
							children: [
								"Simplify your insurance experience with our mobile app. Access your policy details, track claims, and receive instant updates anytime, anywhere.",
								/* @__PURE__ */ jsx("br", {}),
								"Stay in control of your coverage with just a few taps. Download now for convenience and peace of mind!"
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex h-[40px] w-[260px] gap-[20px]",
					children: [/* @__PURE__ */ jsx("a", {
						href: "https://play.google.com/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "h-[40px] w-[120px] overflow-hidden rounded-[6px] border border-[#A6A6A6] bg-black transition-transform duration-200 hover:scale-105 active:scale-95",
						children: /* @__PURE__ */ jsx("img", {
							src: "/Android Store.png",
							alt: "Get it on Google Play",
							className: "h-full w-full object-cover"
						})
					}), /* @__PURE__ */ jsx("a", {
						href: "https://www.apple.com/app-store/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "h-[40px] w-[120px] overflow-hidden rounded-[6px] border border-[#A6A6A6] bg-black transition-transform duration-200 hover:scale-105 active:scale-95",
						children: /* @__PURE__ */ jsx("img", {
							src: "/Apple Store.png",
							alt: "Download on the App Store",
							className: "h-full w-full object-cover"
						})
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto h-[255.9524px] w-[400px] shrink-0 overflow-hidden",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "absolute left-[24px] top-0 h-[394.2831px] w-[194.3843px]",
						children: [/* @__PURE__ */ jsx("img", {
							src: "/backleft.png",
							alt: "",
							className: "absolute left-[3.9px] top-[2.67px] h-[389.6877px] w-[187.0317px] rotate-[6deg]"
						}), /* @__PURE__ */ jsx("img", {
							src: "/BIphone.png",
							alt: "Left Mobile",
							className: "absolute left-[10.97px] top-[9.74px] h-[376.8207px] w-[174.1647px] rotate-[6deg]"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "absolute left-[138px] top-0 z-10 h-[394.2832px] w-[194.3843px]",
						children: [/* @__PURE__ */ jsx("img", {
							src: "/backright.png",
							alt: "",
							className: "absolute left-0 top-0 h-[394.2832px] w-[194.3843px] rotate-[-6deg] shadow-[5.36px_13.69px_2.38px_0px_#00000040]"
						}), /* @__PURE__ */ jsx("img", {
							src: "/Iphone 16 Pro.png",
							alt: "Right Mobile",
							className: "absolute left-[10.97px] top-[9.74px] h-[376.8207px] w-[174.1647px] rotate-[-6deg]"
						})]
					})]
				})
			]
		})
	});
}
//#endregion
//#region components/NewsEvents.tsx
function NewsEvents() {
	return /* @__PURE__ */ jsx("section", {
		className: "w-full bg-white",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-[863.39px] w-full max-w-[1920px] flex-col gap-[30px] px-[80px] py-[100px]",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex h-[128.39px] w-[1280px] shrink-0 flex-col items-center",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex h-[15.39px] w-[240.11px] items-center justify-center gap-[12px]",
						children: [
							/* @__PURE__ */ jsx("span", { className: "h-px w-[28px] bg-[#AC3E25]" }),
							/* @__PURE__ */ jsx("p", {
								className: "h-[15.39px] whitespace-nowrap font-[Poppins] text-[12px] font-medium uppercase leading-[15.39px] text-[#AC3E25]",
								children: "NEWS & EVENTS"
							}),
							/* @__PURE__ */ jsx("span", { className: "h-px w-[28px] bg-[#AC3E25]" })
						]
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-[12px] flex h-[68px] w-[1028px] shrink-0 items-center justify-center whitespace-nowrap text-center font-[Poppins] text-[45px] font-bold uppercase leading-[100%] tracking-[0%] text-black",
						children: "STAY UPDATED WITH THE LATEST HAPPENINGS"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-[14px] w-[820px] text-center font-[Poppins] text-[12px] font-normal leading-[18px] text-[#444444]",
						children: "Stay updated with our latest news, events, and initiatives at Purabi General Insurance. Join us in protecting your future!"
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex w-[1280px] gap-[30px]",
				children: [
					/* @__PURE__ */ jsxs("article", {
						className: "box-border flex h-[505px] w-[413.3333px] shrink-0 flex-col rounded-[20px] bg-white p-[10px] opacity-100 shadow-[0px_0px_10px_0px_#00000026]",
						children: [/* @__PURE__ */ jsx("img", {
							src: "/news.png",
							alt: "News and Events",
							className: "h-[250px] w-[393.3333px] rounded-[10px] object-cover"
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex h-[235px] w-[393.3333px] flex-col gap-[16px] p-[10px] opacity-100",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "h-[14px] w-full shrink-0 font-[Open_Sans] text-[10px] font-normal leading-[100%] text-[#444444]",
									children: "21 June 2025"
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "h-[30px] w-full shrink-0 font-[Open_Sans] text-[22px] font-semibold leading-[100%] text-black",
									children: "শোক সংবাদ"
								}),
								/* @__PURE__ */ jsx("div", { className: "h-px w-full shrink-0 bg-[#44444433]" }),
								/* @__PURE__ */ jsx("p", {
									className: "h-[48px] w-full shrink-0 overflow-hidden font-[Poppins] text-[16px] font-normal leading-[100%] text-black",
									children: "Praesent viverra augue assumenda mauris molestie sed vitae, rutrum inventore ullamcorper minima,…"
								}),
								/* @__PURE__ */ jsx("button", {
									type: "button",
									className: "flex h-[47px] w-[197px] shrink-0 items-center justify-center gap-[15px] rounded-[5px] border border-[#44444433] bg-[#AC3E25] px-[50px] py-[10px] font-[Poppins] text-[18px] font-normal leading-[100%] text-white",
									children: "Read More"
								})
							]
						})]
					}),
					/* @__PURE__ */ jsxs("article", {
						className: "box-border flex h-[505px] w-[413.3333px] shrink-0 flex-col rounded-[20px] bg-white p-[10px] opacity-100 shadow-[0px_0px_10px_0px_#00000026]",
						children: [/* @__PURE__ */ jsx("img", {
							src: "/news.png",
							alt: "News and Events",
							className: "h-[250px] w-[393.3333px] rounded-[10px] object-cover"
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex h-[235px] w-[393.3333px] flex-col gap-[16px] p-[10px]",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "h-[14px] w-full shrink-0 font-[Open_Sans] text-[10px] font-normal leading-[100%] text-[#444444]",
									children: "21 June 2025"
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "h-[30px] w-full shrink-0 font-[Open_Sans] text-[22px] font-semibold leading-[100%] text-black",
									children: "শোক সংবাদ"
								}),
								/* @__PURE__ */ jsx("div", { className: "h-px w-full shrink-0 bg-[#44444433]" }),
								/* @__PURE__ */ jsx("p", {
									className: "h-[48px] w-full shrink-0 overflow-hidden font-[Poppins] text-[16px] font-normal leading-[100%] text-black",
									children: "Praesent viverra augue assumenda mauris molestie sed vitae, rutrum inventore ullamcorper minima,…"
								}),
								/* @__PURE__ */ jsx("button", {
									type: "button",
									className: "flex h-[47px] w-[197px] shrink-0 items-center justify-center gap-[15px] rounded-[5px] border border-[#44444433] bg-[#AC3E25] px-[50px] py-[10px] font-[Poppins] text-[18px] font-normal leading-[100%] text-white",
									children: "Read More"
								})
							]
						})]
					}),
					/* @__PURE__ */ jsxs("article", {
						className: "box-border flex h-[505px] w-[413.3333px] shrink-0 flex-col rounded-[20px] bg-white p-[10px] opacity-100 shadow-[0px_0px_10px_0px_#00000026]",
						children: [/* @__PURE__ */ jsx("img", {
							src: "/Notice.jpg",
							alt: "Purabi General Insurance newspaper notice",
							className: "h-[250px] w-[393.3333px] rounded-[10px] object-cover"
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex h-[235px] w-[393.3333px] flex-col gap-[16px] p-[10px]",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "h-[14px] w-full shrink-0 font-[Open_Sans] text-[10px] font-normal leading-[100%] text-[#444444]",
									children: "21 June 2025"
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "h-[27px] w-[373.3333px] shrink-0 font-[Open_Sans] text-[22px] font-semibold leading-[26.4px] tracking-[0%] text-[#211F38]",
									children: "Notice (28 March, 2022)"
								}),
								/* @__PURE__ */ jsx("div", { className: "h-px w-full shrink-0 bg-[#44444433]" }),
								/* @__PURE__ */ jsx("p", {
									className: "h-[48px] w-full shrink-0 overflow-hidden font-[Poppins] text-[16px] font-normal leading-[100%] text-black",
									children: "Praesent viverra augue assumenda mauris molestie sed vitae, rutrum inventore ullamcorper minima,…"
								}),
								/* @__PURE__ */ jsx("button", {
									type: "button",
									className: "flex h-[47px] w-[197px] shrink-0 items-center justify-center gap-[15px] rounded-[5px] border border-[#44444433] bg-[#AC3E25] px-[50px] py-[10px] font-[Poppins] text-[18px] font-normal leading-[100%] text-white",
									children: "Read More"
								})
							]
						})]
					})
				]
			})]
		})
	});
}
//#endregion
//#region components/PriceCalculator.tsx
function PriceCalculator() {
	const [selectedCategory, setSelectedCategory] = useState("Health");
	return /* @__PURE__ */ jsx("section", {
		className: "bg-[#F7ECEA] px-20 py-[100px]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container mx-auto",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex w-[948px] gap-10",
				children: [
					/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setSelectedCategory("Health"),
						className: `h-[132px] w-[100px] shrink-0 transition ${selectedCategory === "Health" ? "scale-105" : "opacity-60 hover:opacity-100"}`,
						children: /* @__PURE__ */ jsx("img", {
							src: "/Health.png",
							alt: "Health",
							className: "h-[132px] w-[100px] object-contain"
						})
					}),
					/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setSelectedCategory("Car"),
						className: `h-[132px] w-[100px] shrink-0 transition ${selectedCategory === "Car" ? "scale-105" : "opacity-60 hover:opacity-100"}`,
						children: /* @__PURE__ */ jsx("img", {
							src: "/Car.png",
							alt: "Car",
							className: "h-[132px] w-[100px] object-contain"
						})
					}),
					/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setSelectedCategory("Travel"),
						className: `h-[132px] w-[100px] shrink-0 transition ${selectedCategory === "Travel" ? "scale-105" : "opacity-60 hover:opacity-100"}`,
						children: /* @__PURE__ */ jsx("img", {
							src: "/Travel.png",
							alt: "Travel",
							className: "h-[132px] w-[100px] object-contain"
						})
					}),
					/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setSelectedCategory("Life"),
						className: `h-[132px] w-[100px] shrink-0 transition ${selectedCategory === "Life" ? "scale-105" : "opacity-60 hover:opacity-100"}`,
						children: /* @__PURE__ */ jsx("img", {
							src: "/Life.png",
							alt: "Life",
							className: "h-[132px] w-[100px] object-contain"
						})
					}),
					/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setSelectedCategory("Marine"),
						className: `h-[132px] w-[100px] shrink-0 transition ${selectedCategory === "Marine" ? "scale-105" : "opacity-60 hover:opacity-100"}`,
						children: /* @__PURE__ */ jsx("img", {
							src: "/Marine.png",
							alt: "Marine",
							className: "h-[132px] w-[100px] object-contain"
						})
					}),
					/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setSelectedCategory("Engineering"),
						className: `h-[132px] w-[108px] shrink-0 transition ${selectedCategory === "Engineering" ? "scale-105" : "opacity-60 hover:opacity-100"}`,
						children: /* @__PURE__ */ jsx("img", {
							src: "/Engineering.png",
							alt: "Engineering",
							className: "h-[132px] w-[108px] object-contain"
						})
					}),
					/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setSelectedCategory("More"),
						className: `h-[132px] w-[100px] shrink-0 transition ${selectedCategory === "More" ? "scale-105" : "opacity-60 hover:opacity-100"}`,
						children: /* @__PURE__ */ jsx("img", {
							src: "/More.png",
							alt: "More",
							className: "h-[132px] w-[100px] object-contain"
						})
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mx-auto mt-[40px] flex h-[105.71px] w-[1154.01px] items-start gap-[31.42px]",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex h-[105.71px] w-[424.18px] shrink-0 flex-col gap-[15.71px]",
						children: [/* @__PURE__ */ jsx("label", {
							htmlFor: "name",
							className: "h-[33px] w-[424.18px] font-[Poppins] text-[21.95px] font-bold capitalize leading-[100%] text-black",
							children: "Name"
						}), /* @__PURE__ */ jsx("input", {
							id: "name",
							type: "text",
							name: "name",
							placeholder: "Enter Your Full Name",
							className: "h-[57px] w-[424.18px] rounded-[5px] border border-[#0000001A] bg-white px-[24px] font-[Poppins] text-[18px] font-normal italic leading-[100%] tracking-[0%] text-black outline-none placeholder:w-[191px] placeholder:text-[18px] placeholder:font-normal placeholder:italic placeholder:leading-[100%] placeholder:tracking-[0%] placeholder:capitalize placeholder:text-[#44444480] focus:border-[#AC3E25]"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex h-[105.71px] w-[424.18px] shrink-0 flex-col gap-[15.71px]",
						children: [/* @__PURE__ */ jsx("label", {
							htmlFor: "mobile",
							className: "h-[33px] w-[424.18px] font-[Poppins] text-[21.95px] font-bold capitalize leading-[100%] text-black",
							children: "Mobile Number"
						}), /* @__PURE__ */ jsx("input", {
							id: "mobile",
							type: "tel",
							name: "mobile",
							placeholder: "Enter Your Valid Phone Number",
							className: "h-[57px] w-[424.18px] rounded-[5px] border border-[#0000001A] bg-white px-[24px] font-[Poppins] text-[18px] font-normal italic leading-[100%] tracking-[0%] text-black outline-none placeholder:w-[287px] placeholder:text-[18px] placeholder:font-normal placeholder:italic placeholder:leading-[100%] placeholder:tracking-[0%] placeholder:capitalize placeholder:text-[#44444480] focus:border-[#AC3E25]"
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex h-[105.71px] w-[242.8px] shrink-0 items-start pt-[48.71px]",
						children: /* @__PURE__ */ jsxs("button", {
							type: "button",
							className: "flex h-[57px] w-[242.8px] shrink-0 items-center justify-between gap-[15px] rounded-[5px] border border-[#AC3E2533] bg-[#AC3E25] px-[30px] py-[15px] font-[Poppins] text-white transition-colors duration-200 hover:bg-[#922F1C]",
							children: [/* @__PURE__ */ jsx("span", {
								className: "h-[27px] w-[142.8px] text-left font-[Poppins] text-[18px] font-normal leading-[100%]",
								children: "Get Price"
							}), /* @__PURE__ */ jsx("span", {
								className: "flex h-[25px] w-[25px] shrink-0 items-center justify-center",
								children: /* @__PURE__ */ jsx("svg", {
									className: "h-[20px] w-[20px]",
									viewBox: "0 0 25 25",
									fill: "none",
									"aria-hidden": "true",
									children: /* @__PURE__ */ jsx("path", {
										d: "M5.5 19.5L19.5 5.5M19.5 5.5H10.5M19.5 5.5V14.5",
										stroke: "white",
										strokeWidth: "1.7",
										strokeLinecap: "round",
										strokeLinejoin: "round"
									})
								})
							})]
						})
					})
				]
			})]
		})
	});
}
//#endregion
//#region components/TrustedPartners.tsx
function TrustedPartners() {
	return /* @__PURE__ */ jsxs("section", {
		className: "w-full border-t border-[#B6B6B61F] bg-white",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-[353px] w-full max-w-[1920px] flex-col items-center px-[80px] py-[50px]",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "h-[53px] w-[737px] shrink-0 whitespace-nowrap text-center font-[Poppins] text-[35px] font-normal uppercase leading-[100%] tracking-[0%] text-black",
				children: "OUR GENUINE TRUSTED PARTNERS & CLIENTS"
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-[50px] h-[150px] w-[1280px] overflow-hidden",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex w-max animate-trusted-partners hover:[animation-play-state:paused]",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex h-[150px] w-[1280px] shrink-0",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex h-[150px] w-[182.857147px] shrink-0 items-center justify-center gap-[10px] border-y border-l border-[#44444480] bg-white px-[24px] py-[18px]",
								children: /* @__PURE__ */ jsx("img", {
									src: "/Walton.png",
									alt: "Walton",
									className: "h-[95px] w-[150px] object-contain"
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex h-[150px] w-[182.857147px] shrink-0 items-center justify-center gap-[10px] border-y border-l border-[#44444480] bg-white px-[24px] py-[18px]",
								children: /* @__PURE__ */ jsx("img", {
									src: "/incepta.png",
									alt: "Incepta",
									className: "h-[95px] w-[150px] object-contain"
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex h-[150px] w-[182.857147px] shrink-0 items-center justify-center gap-[10px] border-y border-l border-[#44444480] bg-white px-[24px] py-[18px]",
								children: /* @__PURE__ */ jsx("img", {
									src: "/Acme.png",
									alt: "ACME",
									className: "h-[95px] w-[150px] object-contain"
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex h-[150px] w-[182.857147px] shrink-0 items-center justify-center gap-[10px] border-y border-l border-[#44444480] bg-white px-[24px] py-[18px]",
								children: /* @__PURE__ */ jsx("img", {
									src: "/Dorean-Power.png",
									alt: "Doreen Power",
									className: "h-[95px] w-[150px] object-contain"
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex h-[150px] w-[182.857147px] shrink-0 items-center justify-center gap-[10px] border-y border-l border-[#44444480] bg-white px-[24px] py-[18px]",
								children: /* @__PURE__ */ jsx("img", {
									src: "/Healthcare.png",
									alt: "Healthcare Pharmaceuticals Limited",
									className: "h-[95px] w-[150px] object-contain"
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex h-[150px] w-[182.857147px] shrink-0 items-center justify-center gap-[10px] border-y border-l border-[#44444480] bg-white px-[24px] py-[18px]",
								children: /* @__PURE__ */ jsx("img", {
									src: "/General-Pharmaceuticals.png",
									alt: "General Pharmaceuticals Ltd.",
									className: "h-[95px] w-[150px] object-contain"
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex h-[150px] w-[182.857147px] shrink-0 items-center justify-center gap-[10px] border border-[#44444480] bg-white px-[24px] py-[18px]",
								children: /* @__PURE__ */ jsx("img", {
									src: "/Palmal.png",
									alt: "Palmal Group",
									className: "h-[95px] w-[150px] object-contain"
								})
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex h-[150px] w-[1280px] shrink-0",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex h-[150px] w-[182.857147px] shrink-0 items-center justify-center gap-[10px] border-y border-l border-[#44444480] bg-white px-[24px] py-[18px]",
								children: /* @__PURE__ */ jsx("img", {
									src: "/Walton.png",
									alt: "Walton",
									className: "h-[95px] w-[150px] object-contain"
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex h-[150px] w-[182.857147px] shrink-0 items-center justify-center gap-[10px] border-y border-l border-[#44444480] bg-white px-[24px] py-[18px]",
								children: /* @__PURE__ */ jsx("img", {
									src: "/incepta.png",
									alt: "Incepta",
									className: "h-[95px] w-[150px] object-contain"
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex h-[150px] w-[182.857147px] shrink-0 items-center justify-center gap-[10px] border-y border-l border-[#44444480] bg-white px-[24px] py-[18px]",
								children: /* @__PURE__ */ jsx("img", {
									src: "/Acme.png",
									alt: "ACME",
									className: "h-[95px] w-[150px] object-contain"
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex h-[150px] w-[182.857147px] shrink-0 items-center justify-center gap-[10px] border-y border-l border-[#44444480] bg-white px-[24px] py-[18px]",
								children: /* @__PURE__ */ jsx("img", {
									src: "/Dorean-Power.png",
									alt: "Doreen Power",
									className: "h-[95px] w-[150px] object-contain"
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex h-[150px] w-[182.857147px] shrink-0 items-center justify-center gap-[10px] border-y border-l border-[#44444480] bg-white px-[24px] py-[18px]",
								children: /* @__PURE__ */ jsx("img", {
									src: "/Healthcare.png",
									alt: "Healthcare Pharmaceuticals Limited",
									className: "h-[95px] w-[150px] object-contain"
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex h-[150px] w-[182.857147px] shrink-0 items-center justify-center gap-[10px] border-y border-l border-[#44444480] bg-white px-[24px] py-[18px]",
								children: /* @__PURE__ */ jsx("img", {
									src: "/General-Pharmaceuticals.png",
									alt: "General Pharmaceuticals Ltd.",
									className: "h-[95px] w-[150px] object-contain"
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex h-[150px] w-[182.857147px] shrink-0 items-center justify-center gap-[10px] border border-[#44444480] bg-white px-[24px] py-[18px]",
								children: /* @__PURE__ */ jsx("img", {
									src: "/Palmal.png",
									alt: "Palmal Group",
									className: "h-[95px] w-[150px] object-contain"
								})
							})
						]
					})]
				})
			})]
		}), /* @__PURE__ */ jsx("style", { children: `
                @keyframes trustedPartners {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-1280px);
                    }
                }

                .animate-trusted-partners {
                    animation: trustedPartners 18s linear infinite;
                    will-change: transform;
                }
            ` })]
	});
}
//#endregion
//#region app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	meta: () => meta
});
function meta({}) {
	return [{ title: "Purabi General Insurance" }, {
		name: "description",
		content: "Purabi General Insurance Company Limited"
	}];
}
var home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsx(PriceCalculator, {}),
		/* @__PURE__ */ jsx(Category, {}),
		/* @__PURE__ */ jsx(ClaimsTracker, {}),
		/* @__PURE__ */ jsx(TrustedPartners, {}),
		/* @__PURE__ */ jsx(WorkingProcess, {}),
		/* @__PURE__ */ jsx(NewsEvents, {}),
		/* @__PURE__ */ jsx(MobileApp, {})
	] });
});
//#endregion
//#region app/routes/About.tsx
var About_exports = /* @__PURE__ */ __exportAll({ default: () => About_default });
var About_default = UNSAFE_withComponentProps(function AboutSection() {
	const [isPlaying, setIsPlaying] = react.useState(false);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "h-[341px] w-[1440px] bg-cover bg-center px-[80px] py-[50px]",
			style: { backgroundImage: "url('/About Banner.jpg')" },
			children: /* @__PURE__ */ jsxs("div", {
				className: "h-[241px] w-[1280px] rounded-[10px] bg-white/20 px-[20px] py-[30px] backdrop-blur-[10px]",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex h-[41px] w-[181px] items-center justify-center rounded-[50px] border border-white/50 bg-white/10 px-[30px] py-[10px] backdrop-blur-[10px]",
						children: /* @__PURE__ */ jsx("p", {
							className: "w-[121px] text-center font-poppins text-[14px] font-medium leading-[100%] capitalize text-white",
							children: "Home > About Us"
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-[20px] h-[60px] w-[667px]",
						children: /* @__PURE__ */ jsx("h1", {
							className: "font-poppins text-[35px] font-medium leading-[60px] capitalize text-white",
							children: "Securing Your Future with Confidence"
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-[10px] h-[60px] w-[1240px]",
						children: /* @__PURE__ */ jsxs("p", {
							className: "font-poppins text-[20px] font-normal leading-[100%] tracking-[0%] text-white",
							children: [
								"Driven by a vision of trust and reliability, we aim not just to sell policies, but to build lasting relationships with our clients—",
								/* @__PURE__ */ jsx("br", {}),
								"supporting you through every stage of life."
							]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "h-[791px] w-[1440px] bg-white px-[80px] py-[100px]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex h-[591px] w-[1280px] gap-[20px]",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative h-[591px] w-[630px] shrink-0",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "absolute left-0 top-0 h-[421.61px] w-[428.86px] overflow-hidden rounded-[22.73px]",
							children: /* @__PURE__ */ jsx("img", {
								src: "public/About Image.jpg",
								alt: "Family",
								className: "h-full w-full object-cover"
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "absolute left-[392.37px] top-[52.69px] z-20 h-[164.78px] w-[160.82px] rounded-[23.08px] border-[12px] border-solid border-white bg-[#AC3E25]",
							children: [/* @__PURE__ */ jsx("div", {
								className: "absolute left-1/2 top-[34.62px] h-[48.47px] w-[91.56px] -translate-x-1/2",
								children: /* @__PURE__ */ jsx("div", {
									className: "absolute left-1/2 top-[-1.15px] h-[50.78px] w-[79.37px] -translate-x-1/2",
									children: /* @__PURE__ */ jsx("p", {
										className: "m-0 flex h-full w-full items-center justify-center whitespace-nowrap text-center font-jakarta text-[42.16px] font-semibold leading-[48.47px] text-white",
										children: "27+"
									})
								})
							}), /* @__PURE__ */ jsx("div", {
								className: "absolute left-1/2 top-[94.63px] h-[35.52px] w-[91.56px] -translate-x-1/2",
								children: /* @__PURE__ */ jsx("div", {
									className: "absolute left-1/2 top-[-1.25px] h-[36px] w-[99px] -translate-x-1/2",
									children: /* @__PURE__ */ jsxs("p", {
										className: "absolute left-1/2 top-0 m-0 w-[120px] -translate-x-1/2 text-center font-poppins text-[16.86px] font-semibold leading-[17.77px] text-white",
										children: [
											"YEARS OF",
											/* @__PURE__ */ jsx("br", {}),
											"EXPERIENCE"
										]
									})
								})
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "absolute left-[308.35px] top-[274.79px] z-10 h-[316.21px] w-[321.65px] overflow-hidden rounded-[23.86px] border-[12px] border-solid border-white",
							children: /* @__PURE__ */ jsx("img", {
								src: "public/Umbrella.jpg",
								alt: "Insurance protection",
								className: "h-full w-full object-cover"
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "absolute left-[50px] top-[439px] z-30 flex h-[120px] w-[357px] items-center gap-[20px] rounded-[26.03px] bg-white px-[12px] py-[10px] shadow-[0px_26.03px_65.06px_0px_#00000026]",
							children: [/* @__PURE__ */ jsx("div", {
								className: "h-[100px] w-[100px] shrink-0 overflow-hidden rounded-[13.01px] border-[3.9px] border-solid border-[#F6F6F6]",
								children: /* @__PURE__ */ jsx("img", {
									src: "public/AboutSatisfied.jpg",
									alt: "Satisfied client",
									className: "h-full w-full object-cover"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "h-[89px] w-[213px] shrink-0",
								children: [/* @__PURE__ */ jsx("div", {
									className: "h-[43px] w-[109px]",
									children: /* @__PURE__ */ jsx("p", {
										className: "m-0 whitespace-nowrap font-['Open_Sans'] text-[31.62px] font-semibold leading-[100%] tracking-[0%] text-black",
										children: "1000k+"
									})
								}), /* @__PURE__ */ jsx("div", {
									className: "h-[46px] w-[172px]",
									children: /* @__PURE__ */ jsx("p", {
										className: "m-0 whitespace-nowrap bg-gradient-to-r from-[#46190F] to-[#AC3E25] bg-clip-text font-poppins text-[18.97px] font-semibold leading-[45.54px] tracking-[0%] text-transparent",
										children: "SATISFIED CLIENTS"
									})
								})]
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex h-[591px] w-[630px] shrink-0 flex-col gap-[20px]",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "h-[276px] w-[630px]",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex h-[16px] w-[139px] items-center gap-[15px]",
								children: [/* @__PURE__ */ jsx("div", { className: "h-[1px] w-[40px] shrink-0 bg-gradient-to-r from-[#AC3E25] to-[#46190F]" }), /* @__PURE__ */ jsx("div", {
									className: "h-[16px] w-[84px] shrink-0",
									children: /* @__PURE__ */ jsx("p", {
										className: "m-0 whitespace-nowrap bg-gradient-to-b from-[#AC3E25] to-[#9F0101] bg-clip-text font-poppins text-[16px] font-semibold leading-[15.4px] tracking-[0%] text-transparent",
										children: "ABOUT US"
									})
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-[20px] flex h-[120px] w-[630px] items-center gap-[10px] py-[10px]",
								children: /* @__PURE__ */ jsx("div", {
									className: "h-[100px] w-[609px]",
									children: /* @__PURE__ */ jsx("h2", {
										className: "m-0 font-poppins text-[45px] font-bold leading-[50px] tracking-[0%] text-black",
										children: "We’re Providing Best Insurance Policy's"
									})
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-[10px] flex h-[140px] w-[630px] items-center gap-[10px] py-[10px]",
								children: /* @__PURE__ */ jsx("div", {
									className: "h-[120px] w-[630px]",
									children: /* @__PURE__ */ jsxs("p", {
										className: "m-0 font-poppins text-[16px] font-normal leading-[24px] tracking-[0%] text-justify text-black",
										children: [
											"Purabi General Insurance Company Limited (PGICL),",
											" ",
											/* @__PURE__ */ jsx("span", {
												className: "font-bold",
												children: "established on June 29, 1998"
											}),
											", is a leading insurer in Bangladesh, providing comprehensive general insurance services. Licensed under the Insurance Act, 1938, PGICL offers a wide range of protection beyond life insurance, ensuring your peace of mind with reliable and innovative solutions."
										]
									})
								})
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex h-[295px] w-[630px] flex-row gap-[10px] rounded-[20px] bg-[#F6F6F6] p-[20px]",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex h-[252px] w-[290px] max-w-[350px] shrink-0 flex-col gap-[40px]",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex h-[89px] w-[290px] items-center gap-[10px]",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex h-[89px] w-[82px] shrink-0 items-center justify-center rounded-[10px] bg-[#AC3E25]",
									children: /* @__PURE__ */ jsxs("div", {
										className: "relative h-[32px] w-[32px]",
										children: [
											/* @__PURE__ */ jsx("div", { className: "absolute bottom-[4px] left-[3px] h-[10px] w-[4px] border border-white" }),
											/* @__PURE__ */ jsx("div", { className: "absolute bottom-[4px] left-[11px] h-[17px] w-[4px] border border-white" }),
											/* @__PURE__ */ jsx("div", { className: "absolute bottom-[4px] left-[19px] h-[24px] w-[4px] border border-white" }),
											/* @__PURE__ */ jsx("div", { className: "absolute bottom-[3px] left-[1px] h-[1px] w-[25px] bg-white" })
										]
									})
								}), /* @__PURE__ */ jsx("div", {
									className: "h-[89px] w-[198px] shrink-0",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex h-[68px] w-[95px] flex-col gap-[10px]",
										children: [/* @__PURE__ */ jsx("div", {
											className: "h-[42px] w-[95px]",
											children: /* @__PURE__ */ jsx("p", {
												className: "m-0 whitespace-nowrap font-poppins text-[31px] font-semibold leading-[42px] text-black",
												children: "90%"
											})
										}), /* @__PURE__ */ jsx("div", {
											className: "h-[21px] w-[198px]",
											children: /* @__PURE__ */ jsx("p", {
												className: "m-0 whitespace-nowrap font-poppins text-[14px] font-semibold leading-[100%] tracking-[0%] text-[#737092]",
												children: "SUCCESS RATE"
											})
										})]
									})
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex h-[102px] w-[290px] flex-col gap-[5px] rounded-[10px] bg-white p-[10px]",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex h-[24px] w-[230px] items-center gap-[5px]",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full bg-[#AC3E25]",
											children: /* @__PURE__ */ jsx("span", {
												className: "text-[9px] font-bold leading-none text-white",
												children: "✓"
											})
										}), /* @__PURE__ */ jsx("div", {
											className: "h-[24px] w-[211px] shrink-0",
											children: /* @__PURE__ */ jsx("p", {
												className: "m-0 whitespace-nowrap font-poppins text-[16px] font-normal leading-[24px] tracking-[0%] text-[#AC3E25B0]",
												children: "Comprehensive Coverage"
											})
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex h-[24px] w-[249px] items-center gap-[5px]",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full bg-[#AC3E25]",
											children: /* @__PURE__ */ jsx("span", {
												className: "text-[9px] font-bold leading-none text-white",
												children: "✓"
											})
										}), /* @__PURE__ */ jsx("div", {
											className: "h-[24px] w-[230px] shrink-0",
											children: /* @__PURE__ */ jsx("p", {
												className: "m-0 whitespace-nowrap font-poppins text-[16px] font-normal leading-[24px] tracking-[0%] text-[#AC3E25B0]",
												children: "Customer-Centric Approach"
											})
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex h-[24px] w-[235px] items-center gap-[5px]",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full bg-[#AC3E25]",
											children: /* @__PURE__ */ jsx("span", {
												className: "text-[9px] font-bold leading-none text-white",
												children: "✓"
											})
										}), /* @__PURE__ */ jsx("div", {
											className: "h-[24px] w-[216px] shrink-0",
											children: /* @__PURE__ */ jsx("p", {
												className: "m-0 whitespace-nowrap font-poppins text-[16px] font-normal leading-[24px] tracking-[0%] text-[#AC3E25B0]",
												children: "Commitment to Excellence"
											})
										})]
									})
								]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "h-[255px] w-[290px] shrink-0 overflow-hidden rounded-[20px]",
							children: /* @__PURE__ */ jsx("img", {
								src: "public/Insurance About.jpg",
								alt: "Insurance",
								className: "h-full w-full object-cover"
							})
						})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsx(ClaimsTracker, {}),
		/* @__PURE__ */ jsx("section", {
			className: "box-border h-[712px] w-[1440px] bg-white px-[80px] py-[100px]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex gap-[20px]",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex h-[501px] w-[630px] shrink-0 flex-col gap-[30px]",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "relative h-[147px] w-[630px] shrink-0",
							children: [/* @__PURE__ */ jsx("div", {
								className: "absolute top-[23px] box-border h-[124px] w-[630px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] border border-[#00000033] bg-gradient-to-r from-[#AC3E251A] to-transparent py-[19px] pl-[140px] pr-[20px]",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex h-[86px] w-[470px] flex-col gap-[10px]",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "h-[28px] w-[470px] whitespace-nowrap bg-gradient-to-b from-[#AC3E25] to-[#46190F] bg-clip-text font-['Poppins'] text-[25px] font-semibold leading-[26.4px] text-transparent",
										children: "100% Safe Money"
									}), /* @__PURE__ */ jsx("p", {
										className: "h-[48px] w-[470px] font-['Poppins'] text-[18px] font-normal leading-[24px] text-[#000000B2]",
										children: "Your money is 100% secure with us, ensuring peace of mind."
									})]
								})
							}), /* @__PURE__ */ jsx("div", {
								className: "absolute left-[16px] top-0 box-border flex h-[125px] w-[99px] items-center justify-center rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] border-[3px] border-white bg-[#AC3E25] px-[17px] py-[30px] shadow-[1px_2px_21px_0px_#00000026]",
								children: /* @__PURE__ */ jsx("img", {
									src: "/Medel.png",
									alt: "Medal",
									className: "block h-full w-full object-contain"
								})
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "relative h-[147px] w-[630px] shrink-0",
							children: [/* @__PURE__ */ jsx("div", {
								className: "absolute top-[23px] box-border h-[124px] w-[630px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] border border-[#00000033] bg-gradient-to-r from-[#AC3E251A] to-transparent py-[19px] pl-[140px] pr-[20px]",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex h-[86px] w-[470px] flex-col gap-[10px]",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "h-[28px] w-[470px] whitespace-nowrap bg-gradient-to-b from-[#AC3E25] to-[#46190F] bg-clip-text font-['Poppins'] text-[25px] font-semibold leading-[26.4px] text-transparent",
										children: "Anytime Money Back"
									}), /* @__PURE__ */ jsx("p", {
										className: "h-[48px] w-[470px] font-['Poppins'] text-[18px] font-normal leading-[24px] text-[#000000B2]",
										children: "Your money is 100% secure with us, ensuring peace of mind."
									})]
								})
							}), /* @__PURE__ */ jsx("div", { className: "absolute left-[16px] top-0 box-border h-[125px] w-[99px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] border-[3px] border-white bg-[#AC3E25] shadow-[1px_2px_21px_0px_#00000026]" })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "relative h-[147px] w-[630px] shrink-0",
							children: [/* @__PURE__ */ jsx("div", {
								className: "absolute top-[23px] box-border h-[124px] w-[630px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] border border-[#00000033] bg-gradient-to-r from-[#AC3E251A] to-transparent py-[19px] pl-[140px] pr-[20px]",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex h-[86px] w-[470px] flex-col gap-[10px]",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "h-[28px] w-[470px] whitespace-nowrap bg-gradient-to-b from-[#AC3E25] to-[#46190F] bg-clip-text font-['Poppins'] text-[25px] font-semibold leading-[26.4px] text-transparent",
										children: "Anytime Money Back"
									}), /* @__PURE__ */ jsx("p", {
										className: "h-[48px] w-[470px] font-['Poppins'] text-[18px] font-normal leading-[24px] text-[#000000B2]",
										children: "Your money is 100% secure with us, ensuring peace of mind."
									})]
								})
							}), /* @__PURE__ */ jsx("div", { className: "absolute left-[16px] top-0 box-border h-[125px] w-[99px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] border-[3px] border-white bg-[#AC3E25] shadow-[1px_2px_21px_0px_#00000026]" })]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex h-[512px] w-[630px] shrink-0 flex-col gap-[10px]",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex h-[204px] w-[630px] shrink-0 flex-col gap-[10px]",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex h-[16px] w-[193px] shrink-0 items-center gap-[15px]",
								children: [/* @__PURE__ */ jsx("div", { className: "h-[1px] w-[40px] shrink-0 bg-gradient-to-r from-[#AC3E25] to-[#9F0101]" }), /* @__PURE__ */ jsx("h3", {
									className: "h-[16px] w-[138px] shrink-0 bg-gradient-to-b from-[#AC3E25] to-[#9F0101] bg-clip-text font-['Poppins'] text-[16px] font-semibold leading-[15.4px] tracking-[0%] text-transparent",
									children: "WHY CHOOSE US"
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "h-[100px] w-[630px] shrink-0",
								children: /* @__PURE__ */ jsx("h2", {
									className: "h-[100px] w-[630px] font-['Poppins'] text-[45px] font-bold leading-[50px] tracking-[0%] text-black",
									children: "Why You Should Choose Our Insurance Policy's"
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "box-border flex h-[68px] w-[630px] shrink-0 flex-col gap-[10px] py-[10px]",
								children: /* @__PURE__ */ jsx("p", {
									className: "h-[48px] w-[630px] font-['Poppins'] text-[16px] font-normal leading-[100%] tracking-[0%] text-[#000000B2]",
									children: "Choose our insurance policy for comprehensive coverage, reliable protection, hassle-free claims, and a customer-focused experience."
								})
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "relative box-border h-[298px] w-[630px] shrink-0 overflow-hidden rounded-[20px] border-[4px] border-solid border-white shadow-[0px_20px_50px_0px_#00000026]",
						children: !isPlaying ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("img", {
							src: "/Choose Background.jpg",
							alt: "Family",
							className: "absolute inset-0 m-0 block h-full w-full max-w-none object-cover p-0"
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							"aria-label": "Play video",
							onClick: () => setIsPlaying(true),
							className: "absolute left-[275px] top-[109px] z-20 box-border h-[80px] w-[80px] cursor-pointer rounded-[40px] border-[2px] border-solid border-[#AC3E25] bg-[#FFFFFF33] backdrop-blur-[10px]",
							children: /* @__PURE__ */ jsx("span", { className: "absolute left-1/2 top-1/2 ml-[3px] h-0 w-0 -translate-x-1/2 -translate-y-1/2 border-y-[10px] border-l-[16px] border-y-transparent border-l-[#AC3E25]" })
						})] }) : /* @__PURE__ */ jsx("video", {
							src: "/video.mp4",
							controls: true,
							autoPlay: true,
							className: "absolute inset-0 m-0 block h-full w-full max-w-none object-cover p-0"
						})
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsx(TrustedPartners, {})
	] });
});
//#endregion
//#region app/routes/Quote.tsx
var Quote_exports = /* @__PURE__ */ __exportAll({ default: () => Quote_default });
var Quote_default = UNSAFE_withComponentProps(function Quote() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "h-[331px] w-[1440px] bg-cover bg-center px-[80px] py-[50px]",
			style: { backgroundImage: "url('/Banner.jpg')" },
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex h-[231px] w-[1280px] flex-col gap-[10px] rounded-[10px] bg-[#FFFFFF1A] px-[20px] py-[30px] backdrop-blur-[10px]",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex h-[41px] w-[238px] items-center justify-center rounded-[50px] border border-[#FFFFFF80] bg-[#FFFFFF1A] px-[30px] py-[10px] backdrop-blur-[10px]",
					children: /* @__PURE__ */ jsx("div", {
						className: "flex h-[21px] w-[178px] items-center justify-start font-['Poppins'] text-[14px] font-medium capitalize leading-[100%] text-white",
						children: "Home > Health Insurance"
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "flex h-[120px] w-[768px] items-center justify-start",
					children: /* @__PURE__ */ jsxs("h1", {
						className: "text-left font-['Poppins'] text-[35px] font-medium capitalize leading-[60px] text-white",
						children: [
							"Choose The Best Health Insurance Plan For",
							/* @__PURE__ */ jsx("br", {}),
							"Yourself And Your Family"
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "flex h-[913.1313px] w-[1440px] gap-[50px] bg-white px-[80px] py-[80px]",
			children: [/* @__PURE__ */ jsx("div", {
				className: "h-[622px] w-[500px] shrink-0",
				children: /* @__PURE__ */ jsx("img", {
					src: "public/Form Container.png",
					alt: "Health Insurance",
					className: "h-full w-full object-contain"
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "h-[753.1313px] w-[730px] shrink-0 rounded-[20px] border border-[#0000001A] bg-white p-[50px] shadow-[2px_2px_10px_0px_#00000040]",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex w-[630px] flex-col",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "flex h-[109px] w-[630px] justify-center",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex h-[109px] w-[510px] items-start justify-between",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex h-[109px] w-[100px] shrink-0 flex-col items-center gap-[5px]",
										children: [/* @__PURE__ */ jsx("img", {
											src: "/For Self.png",
											alt: "For Self",
											className: "h-[80px] w-[80px]"
										}), /* @__PURE__ */ jsx("div", {
											className: "flex h-[24px] w-[100px] items-center justify-center text-center font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] text-[#AC3E25]",
											children: "For Self"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex h-[109px] w-[100px] shrink-0 flex-col items-center gap-[5px]",
										children: [/* @__PURE__ */ jsx("img", {
											src: "/For Couple.png",
											alt: "For Couple",
											className: "h-[80px] w-[80px]"
										}), /* @__PURE__ */ jsx("div", {
											className: "flex h-[24px] w-[100px] items-center justify-center text-center font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] text-[#00000066]",
											children: "For Couple"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex h-[109px] w-[100px] shrink-0 flex-col items-center gap-[5px]",
										children: [/* @__PURE__ */ jsx("img", {
											src: "/For Family.png",
											alt: "For Family",
											className: "h-[80px] w-[80px]"
										}), /* @__PURE__ */ jsx("div", {
											className: "flex h-[24px] w-[100px] items-center justify-center text-center font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] text-[#00000066]",
											children: "For Family"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex h-[109px] w-[100px] shrink-0 flex-col items-center gap-[5px]",
										children: [/* @__PURE__ */ jsx("img", {
											src: "/For Parents.png",
											alt: "For Parents",
											className: "h-[80px] w-[80px]"
										}), /* @__PURE__ */ jsx("div", {
											className: "flex h-[24px] w-[100px] items-center justify-center text-center font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] text-[#00000066]",
											children: "For Parents"
										})]
									})
								]
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-[50px] flex h-[313.1313px] w-[630px] flex-col gap-[20px]",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex h-[90.7104px] w-[630px] gap-[10px]",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex h-[90.7104px] w-[310px] shrink-0 flex-col gap-[15.71px]",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex h-[24px] w-[310px] items-center font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] text-[#44444480]",
											children: "Name"
										}), /* @__PURE__ */ jsx("div", {
											className: "flex h-[51px] w-[310px] items-center rounded-[5px] border border-[#00000033] bg-[#4444440D] px-[28px] py-[15px]",
											children: /* @__PURE__ */ jsx("span", {
												className: "h-[21px] w-[254px] font-['Poppins'] text-[14px] font-normal capitalize leading-[100%] text-[#444444]",
												children: "Enter Your Full Name"
											})
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex h-[90.7104px] w-[310px] shrink-0 flex-col gap-[15.71px]",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex h-[24px] w-[310px] items-center font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] text-[#44444480]",
											children: "Mobile Number"
										}), /* @__PURE__ */ jsx("div", {
											className: "flex h-[51px] w-[310px] items-center rounded-[5px] border border-[#00000033] bg-[#4444440D] px-[28px] py-[15px]",
											children: /* @__PURE__ */ jsx("span", {
												className: "h-[21px] w-[254px] font-['Poppins'] text-[14px] font-normal capitalize leading-[100%] text-[#444444]",
												children: "Enter Your Phone Number"
											})
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex h-[93.7104px] w-[630px] flex-col gap-[10px]",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-[24px] w-[630px] items-center font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] text-[#44444480]",
										children: "Your Age"
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex h-[54px] w-[630px] items-center justify-between rounded-[5px] border border-[#00000033] bg-[#4444440D] px-[28px] py-[15px]",
										children: [/* @__PURE__ */ jsx("span", {
											className: "h-[21px] w-[550px] font-['Poppins'] text-[14px] font-normal capitalize leading-[100%] text-[#444444]",
											children: "Select"
										}), /* @__PURE__ */ jsx("svg", {
											width: "16",
											height: "10",
											viewBox: "0 0 16 10",
											fill: "none",
											xmlns: "http://www.w3.org/2000/svg",
											children: /* @__PURE__ */ jsx("path", {
												d: "M1 1L8 8L15 1",
												stroke: "black",
												strokeWidth: "2",
												strokeLinecap: "round",
												strokeLinejoin: "round"
											})
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex h-[88.7104px] w-[630px] flex-col gap-[15.71px]",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-[24px] w-[630px] items-center font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] text-[#44444480]",
										children: "Health Coverage Amount (৳)"
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex h-[49px] w-[630px] gap-[16px]",
										children: [
											/* @__PURE__ */ jsx("button", {
												className: "flex h-[49px] flex-1 items-center justify-center rounded-[5px] border border-[#AC3E25] bg-[#AC3E251A]",
												children: /* @__PURE__ */ jsx("span", {
													className: "font-['Poppins'] text-[14px] font-normal leading-[100%] text-[#AC3E25]",
													children: "Show all plan"
												})
											}),
											/* @__PURE__ */ jsx("button", {
												className: "flex h-[49px] flex-1 items-center justify-center rounded-[5px] border border-[#00000033] bg-[#4444440D]",
												children: /* @__PURE__ */ jsx("span", {
													className: "font-['Poppins'] text-[14px] font-normal leading-[100%] text-black",
													children: "Up to 1 lac"
												})
											}),
											/* @__PURE__ */ jsx("button", {
												className: "flex h-[49px] flex-1 items-center justify-center rounded-[5px] border border-[#00000033] bg-[#4444440D]",
												children: /* @__PURE__ */ jsx("span", {
													className: "font-['Poppins'] text-[14px] font-normal leading-[100%] text-black",
													children: "1 Lac to 5 Lac"
												})
											}),
											/* @__PURE__ */ jsx("button", {
												className: "flex h-[49px] flex-1 items-center justify-center rounded-[5px] border border-[#00000033] bg-[#4444440D]",
												children: /* @__PURE__ */ jsx("span", {
													className: "font-['Poppins'] text-[14px] font-normal leading-[100%] text-black",
													children: "5 lac to 10 lac"
												})
											})
										]
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-[50px] flex h-[20px] w-[630px] items-center gap-[15px]",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-[3px] bg-[#AC3E25] text-[14px] leading-none text-white",
								children: "−"
							}), /* @__PURE__ */ jsxs("p", {
								className: "font-['Poppins'] text-[14px] font-normal leading-[100%] text-black",
								children: [
									"I agree with the",
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "font-semibold text-[#AC3E25] underline",
										children: "Terms of Service"
									})
								]
							})]
						}),
						/* @__PURE__ */ jsxs("button", {
							className: "mt-[52px] flex h-[57px] w-[630px] items-center justify-center gap-[20px] rounded-[4px] bg-[#AC3E25] font-['Poppins'] text-[16px] font-medium leading-[100%] text-white",
							children: ["See Plans", /* @__PURE__ */ jsxs("svg", {
								width: "16",
								height: "16",
								viewBox: "0 0 16 16",
								fill: "none",
								xmlns: "http://www.w3.org/2000/svg",
								children: [/* @__PURE__ */ jsx("path", {
									d: "M3 13L13 3",
									stroke: "white",
									strokeWidth: "1.5",
									strokeLinecap: "round",
									strokeLinejoin: "round"
								}), /* @__PURE__ */ jsx("path", {
									d: "M5 3H13V11",
									stroke: "white",
									strokeWidth: "1.5",
									strokeLinecap: "round",
									strokeLinejoin: "round"
								})]
							})]
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "flex h-[722px] w-[1440px] gap-[50px] px-[80px] py-[50px] opacity-100",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex w-[1280px] flex-col items-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex h-[64px] w-[1280px] items-center justify-center",
					children: /* @__PURE__ */ jsx("h2", {
						className: "text-center font-['Poppins'] text-[45px] font-semibold leading-[64px] tracking-[-1.34px] text-[#151515]",
						children: "Frequently asked questions"
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-[40px] flex h-[508px] w-[792px] flex-col gap-[12px]",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "flex h-[53px] w-[792px] items-center rounded-[16px] bg-[#F5F5F5] p-[14px]",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex h-[24px] w-[744px] items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#151515]",
									children: "What is Health Insurance?"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[28px] font-normal leading-[24px] text-[#151515]",
									children: "+"
								})]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex h-[53px] w-[792px] items-center rounded-[16px] bg-[#F5F5F5] p-[14px]",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex h-[24px] w-[744px] items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#151515]",
									children: "Why do you need a Health Insurance?"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[28px] font-normal leading-[24px] text-[#151515]",
									children: "+"
								})]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex h-[53px] w-[792px] items-center rounded-[16px] bg-[#F5F5F5] p-[14px]",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex h-[24px] w-[744px] items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#151515]",
									children: "Which Health Insurance policies are available now?"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[28px] font-normal leading-[24px] text-[#151515]",
									children: "+"
								})]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex h-[53px] w-[792px] items-center rounded-[16px] bg-[#F5F5F5] p-[14px]",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex h-[24px] w-[744px] items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#151515]",
									children: "Individual Plan vs Family Floater Plan, what is the difference?"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[28px] font-normal leading-[24px] text-[#151515]",
									children: "+"
								})]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex h-[53px] w-[792px] items-center rounded-[16px] bg-[#F5F5F5] p-[14px]",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex h-[24px] w-[744px] items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#151515]",
									children: "How to claim for Health Insurance coverage?"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[28px] font-normal leading-[24px] text-[#151515]",
									children: "+"
								})]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex h-[53px] w-[792px] items-center rounded-[16px] bg-[#F5F5F5] p-[14px]",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex h-[24px] w-[744px] items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#151515]",
									children: "Which Health Insurance policies are available now?"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[28px] font-normal leading-[24px] text-[#151515]",
									children: "+"
								})]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex h-[53px] w-[792px] items-center rounded-[16px] bg-[#F5F5F5] p-[14px]",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex h-[24px] w-[744px] items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#151515]",
									children: "Why is Bimafy the best place to buy Health Insurance policies?"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[28px] font-normal leading-[24px] text-[#151515]",
									children: "+"
								})]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex h-[53px] w-[792px] items-center rounded-[16px] bg-[#F5F5F5] p-[14px]",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex h-[24px] w-[744px] items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#151515]",
									children: "How to contact Bimafy?"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[28px] font-normal leading-[24px] text-[#151515]",
									children: "+"
								})]
							})
						})
					]
				})]
			})
		})
	] });
});
//#endregion
//#region app/routes/AgentPortal.tsx
var AgentPortal_exports = /* @__PURE__ */ __exportAll({ default: () => AgentPortal_default });
var AgentPortal_default = UNSAFE_withComponentProps(function AgentPortal() {
	return /* @__PURE__ */ jsx("div", {
		className: "h-[760px] w-[1280px] opacity-100",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex h-[760px] w-[1280px] gap-[20px] rounded-[50px] p-[20px] opacity-100",
			style: { background: "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, rgba(172, 62, 37, 0.1), rgba(172, 62, 37, 0.1))" },
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex h-[720px] w-[610px] flex-col justify-between rounded-[50px] p-[50px] opacity-100",
				style: {
					backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%), url('/Sign Up.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat"
				},
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex h-[41px] w-[510px] justify-between opacity-100",
					children: [/* @__PURE__ */ jsx("div", {
						className: "relative h-[33.1722px] w-[180px] opacity-100",
						children: /* @__PURE__ */ jsx("div", {
							className: "absolute h-[46.2236px] w-[184.3504px] opacity-100",
							style: {
								top: "-6.53px",
								left: "-2.18px",
								background: "#FFFFFF"
							}
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex h-[41px] w-[222px] gap-[10px] opacity-100",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-[41px] w-[98px] items-center justify-center rounded-[100px] px-[30px] py-[10px] opacity-100 backdrop-blur-[10px]",
							children: /* @__PURE__ */ jsx("span", {
								className: "h-[21px] w-[38px] font-[Poppins] text-[14px] font-medium leading-[100%] tracking-[0%] capitalize text-white",
								children: "Login"
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "flex h-[41px] w-[114px] items-center justify-center gap-[10px] rounded-[100px] border-[0.5px] border-white px-[30px] py-[10px] opacity-100 backdrop-blur-[10px]",
							style: { background: "#FFFFFF1A" },
							children: /* @__PURE__ */ jsx("div", {
								className: "h-[21px] w-[54px] font-[Poppins] text-[14px] font-medium leading-[100%] tracking-[0%] capitalize text-white",
								children: "Sign Up"
							})
						})]
					})]
				})
			}), /* @__PURE__ */ jsx("div", {})]
		})
	});
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-cS4NAr1S.js",
		"imports": ["/assets/jsx-runtime-BRh8Z3Z8.js", "/assets/errorBoundaries-BlDYCko_.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-C1eLzRmB.js",
			"imports": [
				"/assets/jsx-runtime-BRh8Z3Z8.js",
				"/assets/errorBoundaries-BlDYCko_.js",
				"/assets/lib-BxRzzFV9.js"
			],
			"css": ["/assets/root-BoFgaJ7B.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"layouts/MainLayouts": {
			"id": "layouts/MainLayouts",
			"parentId": "root",
			"path": void 0,
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/MainLayouts-D9pCDzTG.js",
			"imports": [
				"/assets/jsx-runtime-BRh8Z3Z8.js",
				"/assets/lib-BxRzzFV9.js",
				"/assets/errorBoundaries-BlDYCko_.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "layouts/MainLayouts",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-u8pNXVc1.js",
			"imports": [
				"/assets/jsx-runtime-BRh8Z3Z8.js",
				"/assets/lib-BxRzzFV9.js",
				"/assets/TrustedPartners-BAMiVjk9.js",
				"/assets/errorBoundaries-BlDYCko_.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/About": {
			"id": "routes/About",
			"parentId": "layouts/MainLayouts",
			"path": "about",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/About-LHa32SJz.js",
			"imports": [
				"/assets/jsx-runtime-BRh8Z3Z8.js",
				"/assets/TrustedPartners-BAMiVjk9.js",
				"/assets/lib-BxRzzFV9.js",
				"/assets/errorBoundaries-BlDYCko_.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/Quote": {
			"id": "routes/Quote",
			"parentId": "layouts/MainLayouts",
			"path": "quote",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/Quote-CIQJkaC5.js",
			"imports": ["/assets/jsx-runtime-BRh8Z3Z8.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/AgentPortal": {
			"id": "routes/AgentPortal",
			"parentId": "layouts/MainLayouts",
			"path": "agent-portal",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/AgentPortal-CvJb3mME.js",
			"imports": ["/assets/jsx-runtime-BRh8Z3Z8.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-3f190151.js",
	"version": "3f190151",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = {
	"unstable_enableNodeReadableStream": false,
	"unstable_optimizeDeps": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"layouts/MainLayouts": {
		id: "layouts/MainLayouts",
		parentId: "root",
		path: void 0,
		index: void 0,
		caseSensitive: void 0,
		module: MainLayouts_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "layouts/MainLayouts",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	},
	"routes/About": {
		id: "routes/About",
		parentId: "layouts/MainLayouts",
		path: "about",
		index: void 0,
		caseSensitive: void 0,
		module: About_exports
	},
	"routes/Quote": {
		id: "routes/Quote",
		parentId: "layouts/MainLayouts",
		path: "quote",
		index: void 0,
		caseSensitive: void 0,
		module: Quote_exports
	},
	"routes/AgentPortal": {
		id: "routes/AgentPortal",
		parentId: "layouts/MainLayouts",
		path: "agent-portal",
		index: void 0,
		caseSensitive: void 0,
		module: AgentPortal_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
