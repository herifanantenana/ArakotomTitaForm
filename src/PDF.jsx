/* eslint-disable react/prop-types */
import {
	Document,
	Link,
	Page,
	StyleSheet,
	Text,
	View,
} from "@react-pdf/renderer";

const getHostUrl = () => {
	const { protocol, hostname, port } = window.location;
	return `${protocol}//${hostname}${port ? `:${port}` : ""}`;
};

// Updated Styles
const styles = StyleSheet.create({
	page: {
		padding: 20,
		fontSize: 11,
		lineHeight: 1.6,
		color: "#333",
	},
	section: {
		marginBottom: 15,
		padding: 12,
		border: "1pt solid #ddd",
		borderRadius: 6,
	},
	headerTitle: {
		fontSize: 22,
		fontWeight: "bold",
		marginBottom: 20,
		color: "#2a4d69",
		textAlign: "center",
	},
	title: {
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 8,
		color: "#2a4d69",
	},
	table: {
		display: "table",
		width: "100%",
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#ddd",
		marginBottom: 15,
	},
	tableRow: {
		flexDirection: "row",
	},
	tableCol: {
		width: "33.33%",
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#ddd",
		borderLeftWidth: 0,
		borderTopWidth: 0,
		padding: 6,
	},
	tableCell: {
		fontSize: 11,
		color: "#333",
	},
	listItem: {
		marginLeft: 15,
		marginBottom: 6,
		fontSize: 11,
		color: "#333",
	},
	valueText: {
		color: "#1a4d68",
		fontWeight: "bold",
	},
	link: {
		color: "blue",
		textDecoration: "underline",
		fontStyle: "italic",
	},
});

// Components for Each Step
const Step1 = ({ step }) => (
	<View style={styles.section}>
		<Text style={styles.title}>
			{`Ètape ${step.id} : `}
			{step.title}
		</Text>
		<Text>
			{step.subStep[0].title}
			{step.subStep[0].title && " : "}
			<Text style={styles.valueText}>{step.subStep[0].selected}</Text>
		</Text>
		<Text>
			{step.subStep[1].title}
			{step.subStep[0].title && " : "}
			<Text style={styles.valueText}>{step.subStep[1].value}</Text>
		</Text>
		<Text>
			{step.subStep[2].title}
			{step.subStep[0].title && " : "}
			<Text style={styles.valueText}>{step.subStep[2].selected}</Text>
		</Text>
		<Text>
			{step.subStep[3].title}
			{step.subStep[0].title && " : "}
			<Text style={styles.valueText}>{step.subStep[3].selected}</Text>
		</Text>
		<Text>
			{step.subStep[4].title}
			{step.subStep[0].title && " : "}{" "}
		</Text>
		<View style={styles.table}>
			<View style={styles.tableRow}>
				{step.subStep[4].headers.map((header, index) => (
					<View key={`head${step.id}-${index + 1}`} style={styles.tableCol}>
						<Text style={styles.tableCell}>{header}</Text>
					</View>
				))}
			</View>
			{step.subStep[4].tableValues.map((row, rowIndex) => (
				<View key={`row${step.id}-${rowIndex + 1}`} style={styles.tableRow}>
					<View style={styles.tableCol}>
						<Text style={styles.tableCell}>
							<Text style={styles.valueText}>{row.type}</Text>
						</Text>
					</View>
					<View style={styles.tableCol}>
						<Text style={styles.tableCell}>
							<Text style={styles.valueText}>{row.length}</Text>
						</Text>
					</View>
					<View style={styles.tableCol}>
						<Text style={styles.tableCell}>
							<Text style={styles.valueText}>{row.observation}</Text>
						</Text>
					</View>
				</View>
			))}
		</View>
		<Link style={styles.link} src={`${getHostUrl()}/files/bilanxlsx.xlsx`}>
			Bilan énergétique des charges
		</Link>
		<Text>
			{step.subStep[5].title}
			{step.subStep[0].title && " : "}
			<Text style={styles.valueText}>{step.subStep[5].selected}</Text>
		</Text>
		<Text>
			{step.subStep[6].title}
			{step.subStep[0].title && " : "}
		</Text>
		{step.subStep[6].selected.map((item, index) => (
			<Text key={`item${step.id}-${index + 1}`} style={styles.listItem}>
				☐ <Text style={styles.valueText}>{item}</Text>
			</Text>
		))}
		<Text>
			Observation{step.subStep[0].title && " : "}
			<Text style={styles.valueText}>{step.subStep[7].value}</Text>
		</Text>
	</View>
);

const Step2 = ({ step }) => (
	<View style={styles.section}>
		<Text style={styles.title}>
			{`Ètape ${step.id} : `}
			{step.title}
		</Text>
		<Text>Dimensionnement</Text>
		<Text>
			{step.subStep[0].title}
			{step.subStep[0].title && " : "}
		</Text>
		<View style={styles.table}>
			<View style={styles.tableRow}>
				{step.subStep[0].headers.map((header, index) => (
					<View key={`head${step.id}-${index + 1}`} style={styles.tableCol}>
						<Text style={styles.tableCell}>{header}</Text>
					</View>
				))}
			</View>
			{step.subStep[0].tableValues.map((row, rowIndex) => (
				<View key={`row${step.id}-${rowIndex + 1}`} style={styles.tableRow}>
					<View style={styles.tableCol}>
						<Text style={styles.tableCell}>
							<Text style={styles.valueText}>{row.type}</Text>
						</Text>
					</View>
					<View style={styles.tableCol}>
						<Text style={styles.tableCell}>
							<Text style={styles.valueText}>{row.quantity}</Text>
						</Text>
					</View>
				</View>
			))}
		</View>
		<Text>
			{step.subStep[1].title}
			{step.subStep[1].title && " : "}
		</Text>
		<View style={styles.table}>
			<View style={styles.tableRow}>
				{step.subStep[1].headers.map((header, index) => (
					<View key={`head${step.id}-${index + 1}`} style={styles.tableCol}>
						<Text style={styles.tableCell}>{header}</Text>
					</View>
				))}
			</View>
			{step.subStep[1].tableValues.map((row, rowIndex) => (
				<View key={`row${step.id}-${rowIndex + 1}`} style={styles.tableRow}>
					<View style={styles.tableCol}>
						<Text style={styles.tableCell}>
							<Text style={styles.valueText}>{row.type}</Text>
						</Text>
					</View>
					<View style={styles.tableCol}>
						<Text style={styles.tableCell}>
							<Text style={styles.valueText}>{row.quantity}</Text>
						</Text>
					</View>
				</View>
			))}
		</View>
		<Text>
			{step.subStep[2].title}
			{step.subStep[2].title && " : "}
		</Text>
		<View style={styles.table}>
			<View style={styles.tableRow}>
				{step.subStep[2].headers.map((header, index) => (
					<View key={`head${step.id}-${index + 1}`} style={styles.tableCol}>
						<Text style={styles.tableCell}>{header}</Text>
					</View>
				))}
			</View>
			{step.subStep[2].tableValues.map((row, rowIndex) => (
				<View key={`row${step.id}-${rowIndex + 1}`} style={styles.tableRow}>
					<View style={styles.tableCol}>
						<Text style={styles.tableCell}>
							<Text style={styles.valueText}>{row.type}</Text>
						</Text>
					</View>
					<View style={styles.tableCol}>
						<Text style={styles.tableCell}>
							<Text style={styles.valueText}>{row.quantity}</Text>
						</Text>
					</View>
				</View>
			))}
		</View>
		<Text>
			{step.subStep[3].title}
			{step.subStep[3].title && " : "}
			<Text style={styles.valueText}>{step.subStep[3].value}</Text>
		</Text>
		<Text>
			{step.subStep[4].title}
			{step.subStep[4].title && " : "}
			<Text style={styles.valueText}>{step.subStep[4].value}</Text>
		</Text>
		<Text>
			Observation{" : "}
			<Text style={styles.valueText}>{step.subStep[5].value}</Text>
		</Text>
	</View>
);

const Step3 = ({ step }) => (
	<View style={styles.section}>
		<Text style={styles.title}>
			{`Ètape ${step.id} : `}
			{step.title}
		</Text>
		<Text>
			{step.subStep[0].title}
			{step.subStep[0].title && " : "}
		</Text>
		{step.subStep[0].selected.map((item, index) => (
			<Text key={`item${step.id}-${index + 1}`} style={styles.listItem}>
				☐ <Text style={styles.valueText}>{item}</Text>
			</Text>
		))}
		<Text>
			Observation{" : "}
			<Text style={styles.valueText}>{step.subStep[1].value}</Text>
		</Text>
	</View>
);

const Step4 = ({ step }) => (
	<View style={styles.section}>
		<Text style={styles.title}>
			{`Ètape ${step.id} : `}
			{step.title}
		</Text>
		<Text>
			{step.subStep[0].title}
			{step.subStep[0].title && " : "}
		</Text>
		{step.subStep[0].selected.map((item, index) => (
			<Text key={`item${step.id}-${index + 1}`} style={styles.listItem}>
				☐ <Text style={styles.valueText}>{item}</Text>
			</Text>
		))}
		<Text>
			Observation{" : "}
			<Text style={styles.valueText}>{step.subStep[1].value}</Text>
		</Text>
	</View>
);

const Step5 = ({ step }) => (
	<View style={styles.section}>
		<Text style={styles.title}>
			{`Ètape ${step.id} : `}
			{step.title}
		</Text>
		<Text>
			{step.subStep[0].title}
			{step.subStep[0].title && " : "}
		</Text>
		{step.subStep[0].selected.map((item, index) => (
			<Text key={`item${step.id}-${index + 1}`} style={styles.listItem}>
				☐ <Text style={styles.valueText}>{item}</Text>
			</Text>
		))}
		<Link style={styles.link} src={`${getHostUrl()}/files/contrat.pdf`}>
			Contrat solaire
		</Link>
		<Text>
			Observation{" : "}
			<Text style={styles.valueText}>{step.subStep[1].value}</Text>
		</Text>
	</View>
);

const Step6 = ({ step }) => (
	<View style={styles.section}>
		<Text style={styles.title}>
			{`Ètape ${step.id} : `}
			{step.title}
		</Text>
		<Text>
			Observation{" : "}
			<Text style={styles.valueText}>{step.subStep[0].value}</Text>
		</Text>
	</View>
);

const Step7 = ({ step }) => (
	<View style={styles.section}>
		<Text style={styles.title}>
			{`Ètape ${step.id} : `}
			{step.title}
		</Text>
		{step.subStep[0].selected.map((item, index) => (
			<Text key={`item${step.id}-${index + 1}`} style={styles.listItem}>
				☐ <Text style={styles.valueText}>{item}</Text>
			</Text>
		))}
		<Text>
			{step.subStep[1].title}
			{step.subStep[1].title && " : "}
			<Text style={styles.valueText}>{step.subStep[1].value}</Text>
		</Text>
		<Text>
			Observation{" : "}
			<Text style={styles.valueText}>{step.subStep[2].value}</Text>
		</Text>
	</View>
);

const Step8 = ({ step }) => (
	<View style={styles.section}>
		<Text style={styles.title}>
			{`Ètape ${step.id} : `}
			{step.title}
		</Text>
		<Text>
			{step.subStep[0].title}
			{step.subStep[0].title && " : "}
		</Text>
		{step.subStep[0].selected.map((item, index) => (
			<Text key={`item${step.id}-${index + 1}`} style={styles.listItem}>
				☐ <Text style={styles.valueText}>{item}</Text>
			</Text>
		))}
		<Text>
			{step.subStep[1].title}
			{step.subStep[1].title && " : "}
		</Text>
		{step.subStep[1].selected.map((item, index) => (
			<Text key={`item${step.id}-${index + 1}`} style={styles.listItem}>
				☐ <Text style={styles.valueText}>{item}</Text>
			</Text>
		))}
		<Text>
			Observation{" : "}
			<Text style={styles.valueText}>{step.subStep[2].value}</Text>
		</Text>
	</View>
);

const Step9 = ({ step }) => (
	<View style={styles.section}>
		<Text style={styles.title}>
			{`Ètape ${step.id} : `}
			{step.title}
		</Text>
		<Text>
			Observation{" : "}
			<Text style={styles.valueText}>{step.subStep[0].value}</Text>
		</Text>
	</View>
);

const Step10 = ({ step }) => (
	<View style={styles.section}>
		<Text style={styles.title}>
			{`Ètape ${step.id} : `}
			{step.title}
		</Text>
		<View style={styles.table}>
			<View style={styles.tableRow}>
				{step.subStep[0].headers.map((header, index) => (
					<View key={`head${step.id}-${index + 1}`} style={styles.tableCol}>
						<Text style={styles.tableCell}>{header}</Text>
					</View>
				))}
			</View>
			{step.subStep[0].tableValues.map((row, rowIndex) => (
				<View key={`row${step.id}-${rowIndex + 1}`} style={styles.tableRow}>
					<View style={styles.tableCol}>
						<Text style={styles.tableCell}>
							<Text style={styles.valueText}>{row.lundi}</Text>
						</Text>
					</View>
					<View style={styles.tableCol}>
						<Text style={styles.tableCell}>
							<Text style={styles.valueText}>{row.mardi}</Text>
						</Text>
					</View>
					<View style={styles.tableCol}>
						<Text style={styles.tableCell}>
							<Text style={styles.valueText}>{row.mercredi}</Text>
						</Text>
					</View>
					<View style={styles.tableCol}>
						<Text style={styles.tableCell}>
							<Text style={styles.valueText}>{row.jeudi}</Text>
						</Text>
					</View>
					<View style={styles.tableCol}>
						<Text style={styles.tableCell}>
							<Text style={styles.valueText}>{row.vendredi}</Text>
						</Text>
					</View>
					<View style={styles.tableCol}>
						<Text style={styles.tableCell}>
							<Text style={styles.valueText}>{row.samedi}</Text>
						</Text>
					</View>
					<View style={styles.tableCol}>
						<Text style={styles.tableCell}>
							<Text style={styles.valueText}>{row.dimanche}</Text>
						</Text>
					</View>
				</View>
			))}
		</View>
	</View>
);

const Step11 = ({ step }) => (
	<View style={styles.section}>
		<Text style={styles.title}>
			{`Ètape ${step.id} : `}
			{step.title}
		</Text>
		<Text style={styles.valueText}>{step.subStep[0].value}</Text>
	</View>
);

// Main Document
const MyDocument = ({ data }) => (
	<Document>
		<Page size="A4" style={styles.page}>
			<Text style={styles.headerTitle}>
				GESTION DU PROJET DE CONCEPTION D’UNE CENTRALE SOLAIRE
			</Text>
			<Step1 step={data.step1} />
			<Step2 step={data.step2} />
			<Step3 step={data.step3} />
			<Step4 step={data.step4} />
			<Step5 step={data.step5} />
			<Step6 step={data.step6} />
			<Step7 step={data.step7} />
			<Step8 step={data.step8} />
			<Step9 step={data.step9} />
			<Step10 step={data.step10} />
			<Step11 step={data.step11} />
		</Page>
	</Document>
);

export default MyDocument;
