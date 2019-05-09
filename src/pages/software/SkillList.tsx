import React, { ReactNode } from 'react';
import { IonRow, IonCol } from '@ionic/react';
import { SectionText } from '../../common/Section';

// =============================================================================
type SkillListProps = {
	title: string;
	children: ReactNode;
};

export const SkillList: React.FC<SkillListProps> = (props: SkillListProps) => {
	return (
		<IonRow>
			<IonCol size="4" sizeLg="2">
				<SectionText><strong>{props.title}</strong></SectionText>
			</IonCol>
			<IonCol size="8" sizeLg="10">
				<SectionText>{props.children}</SectionText>
			</IonCol>
		</IonRow>
	);
}

export default SkillList;
