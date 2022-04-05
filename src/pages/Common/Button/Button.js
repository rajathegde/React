import React from "react";
import styled, { css } from "styled-components";
const StyledButton = styled.button`
	background: ${(props) =>
		(props.disabled && props.disabledBackground) || props.background};
	box-shadow: none;
	border: ${(props) => props.border || "none"};
	font-size: 16px;
	font-weight: 700;
	float:left;
	margin: 20px;
	padding: ${(props) => (props.padding ? props.padding : "0")};
	font-stretch: normal;
	font-style: normal;
	// font-family: "CircularStd-Book";
	line-height: 0.85;
	letter-spacing: normal;
	text-align: center;
	color: white;
	cursor: ${(props) => !props.disabled && "pointer"};

	outline: none;

	${(props) =>
		css`
			width: ${props.width};
			height: ${props.height};

			border-radius: ${props.borderRadius};
		`};

	${(props) =>
		props.flatButtonBlueSmall &&
		css`
			background: transparent;
			height: 17px;
			font-size: 16px;
			line-height: 1;
			text-align: left;
			color: white;
		`};

	&:hover {
		transform: ${(props) => !props.disabled && "translateY(1px)"};
		box-shadow: ${(props) =>
		!props.flatButtonBlueSmall &&
		!props.disabled &&
		"0 2px 5px rgba(0, 0, 0, 0.15)"};
	}
	&:active {
		-webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
		-moz-box-shadow: inset 0px 0px 5px #c1c1c1;
		box-shadow: inset 0px 0px 5px #c1c1c1;
		transform: translateY(5px);
	}
	&:focus {
		transform: ${(props) => !props.disabled && "translateY(1px)"};
		box-shadow: ${(props) =>
		!props.flatButtonBlueSmall &&
		!props.disabled &&
		"0 2px 5px rgba(0, 0, 0, 0.15)"};
		// border: 2px solid #000;
	}
`;

const Button = React.forwardRef((props, ref) => {
	const {
		text,
		onClick,
		disabled,
		id,
		icon,
		tabIndex,
		autoFocus,
		onFocus,
		thumbnail, src,
		...otherProps
	} = props;

	const { fn } = onClick;
	return (
		<StyledButton
			disabled={disabled}
			id={id}
			onClick={(e) => {
				fn(e);
			}}
			tabIndex={tabIndex}
			autoFocus={autoFocus}
			ref={ref}
			{...otherProps}
		>
			{thumbnail ? (
				src ?
					<>
						{text}<img src={icon} alt="button icon" style={{ paddingLeft: "20px" }} /></> :
					<div style={{ display: "flex" }}>
						<div
							className="dot"
							style={{
								height: "18px",
								radius: "50%",
								width: "18px",
								background: thumbnail,
							}}
						></div>

						{icon ? <img src={icon} alt="button icon" /> : null}
						<div style={{ margin: "auto 0" }}>{text}</div>
					</div>
			) : (
					text
				)}
		</StyledButton>
	);
});

export { Button };
