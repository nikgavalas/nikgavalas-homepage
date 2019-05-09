import styled from "styled-components";


// =============================================================================
export const ProjectTypographyImage = styled.img`
	border-radius: 10%;
`;


// =============================================================================
export const ProjectTypographyTitle = styled.h2`
	margin: 0 0 10px 0;
	font-weight: 700;
	font-size: 28px;

	@media (max-width: 576px) {
		font-size: 24px;
	}
`;


// =============================================================================
export const ProjectTypographySubtitle = styled.h6`
	margin: 0;
	font-size: 20px;

	@media (max-width: 576px) {
		font-size: 18px;
	}
`;


// =============================================================================
export const ProjectTypographyBody = styled.div`
	margin: 10px 0;
	font-size: 18px;
	color: var(--ion-color-dark);

	@media (max-width: 576px) {
		font-size: 16px;
	}
`;


// =============================================================================
export const ProjectTypographyTech = styled.div`
	margin: 10px 0;
	font-size: 18px;
	color: var(--ion-color-medium);

	@media (max-width: 576px) {
		font-size: 16px;
	}
`;
