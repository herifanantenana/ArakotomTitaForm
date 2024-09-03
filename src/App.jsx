import { PDFDownloadLink } from "@react-pdf/renderer";
import { useState } from "react";
import "./App.scss";
import Step1 from "./components/steps/Step1";
import Step10 from "./components/steps/Step10";
import Step11 from "./components/steps/Step11";
import Step2 from "./components/steps/Step2";
import Step3 from "./components/steps/Step3";
import Step4 from "./components/steps/Step4";
import Step5 from "./components/steps/Step5";
import Step6 from "./components/steps/Step6";
import Step7 from "./components/steps/Step7";
import Step8 from "./components/steps/Step8";
import Step9 from "./components/steps/Step9";
import {
	step10Data,
	step11Data,
	step1Data,
	step2Data,
	step3Data,
	step4Data,
	step5Data,
	step6Data,
	step7Data,
	step8Data,
	step9Data,
} from "./data.js";
import PDFRender from "./PDF";
function App() {
	const [step1, setStep1] = useState(step1Data);
	const [step2, setStep2] = useState(step2Data);
	const [step3, setStep3] = useState(step3Data);
	const [step4, setStep4] = useState(step4Data);
	const [step5, setStep5] = useState(step5Data);
	const [step6, setStep6] = useState(step6Data);
	const [step7, setStep7] = useState(step7Data);
	const [step8, setStep8] = useState(step8Data);
	const [step9, setStep9] = useState(step9Data);
	const [step10, setStep10] = useState(step10Data);
	const [step11, setStep11] = useState(step11Data);

	function setStateAll(
		prevState,
		event,
		{ value, indexSub, rowIndex, headIndex }
	) {
		return {
			...prevState,
			subStep: prevState.subStep.map((sub) => {
				if (sub.id === indexSub) {
					switch (sub.type) {
						case "choix":
							return { ...sub, selected: value };
						case "champ":
							return { ...sub, value: value };
						case "observation":
							return { ...sub, value: value };
						case "cocher":
							return {
								...sub,
								selected: event.target.checked
									? [...sub.selected, event.target.value]
									: sub.selected.filter(
											(option) => option !== event.target.value
									  ),
							};
						case "table":
							return {
								...sub,
								tableValues: sub.tableValues.map((row, index) =>
									index === rowIndex
										? {
												...row,
												[Object.keys(row)[headIndex]]: value,
										  }
										: row
								),
							};
						default:
							break;
					}
				} else {
					return sub;
				}
			}),
		};
	}

	function handleStepChange(
		event,
		stepId,
		{ value, indexSub, rowIndex, headIndex }
	) {
		switch (stepId) {
			case 1:
				setStep1((prevState) =>
					setStateAll(prevState, event, {
						value,
						indexSub,
						rowIndex,
						headIndex,
					})
				);
				break;
			case 2:
				setStep2((prevState) =>
					setStateAll(prevState, event, {
						value,
						indexSub,
						rowIndex,
						headIndex,
					})
				);
				break;
			case 3:
				setStep3((prevState) =>
					setStateAll(prevState, event, {
						value,
						indexSub,
						rowIndex,
						headIndex,
					})
				);
				break;
			case 4:
				setStep4((prevState) =>
					setStateAll(prevState, event, {
						value,
						indexSub,
						rowIndex,
						headIndex,
					})
				);
				break;
			case 5:
				setStep5((prevState) =>
					setStateAll(prevState, event, {
						value,
						indexSub,
						rowIndex,
						headIndex,
					})
				);
				break;
			case 6:
				setStep6((prevState) =>
					setStateAll(prevState, event, {
						value,
						indexSub,
						rowIndex,
						headIndex,
					})
				);
				break;
			case 7:
				setStep7((prevState) =>
					setStateAll(prevState, event, {
						value,
						indexSub,
						rowIndex,
						headIndex,
					})
				);
				break;
			case 8:
				setStep8((prevState) =>
					setStateAll(prevState, event, {
						value,
						indexSub,
						rowIndex,
						headIndex,
					})
				);
				break;
			case 9:
				setStep9((prevState) =>
					setStateAll(prevState, event, {
						value,
						indexSub,
						rowIndex,
						headIndex,
					})
				);
				break;
			case 10:
				setStep10((prevState) =>
					setStateAll(prevState, event, {
						value,
						indexSub,
						rowIndex,
						headIndex,
					})
				);
				break;
			case 11:
				setStep11((prevState) =>
					setStateAll(prevState, event, {
						value,
						indexSub,
						rowIndex,
						headIndex,
					})
				);
				break;
			default:
				break;
		}
	}
	function handleExportData() {
		return {
			step1,
			step2,
			step3,
			step4,
			step5,
			step6,
			step7,
			step8,
			step9,
			step10,
			step11,
		};
	}

	return (
		<main>
			<h1>GESTION DU PROJET DE CONCEPTION D’UNE CENTRALE SOLAIRE </h1>
			<div>
				<Step1 data={step1} onChange={handleStepChange} />
				<Step2 data={step2} onChange={handleStepChange} />
				<Step3 data={step3} onChange={handleStepChange} />
				<Step4 data={step4} onChange={handleStepChange} />
				<Step5 data={step5} onChange={handleStepChange} />
				<Step6 data={step6} onChange={handleStepChange} />
				<Step7 data={step7} onChange={handleStepChange} />
				<Step8 data={step8} onChange={handleStepChange} />
				<Step9 data={step9} onChange={handleStepChange} />
				<Step10 data={step10} onChange={handleStepChange} />
				<Step11 data={step11} onChange={handleStepChange} />
			</div>
			<PDFDownloadLink
				document={<PDFRender data={handleExportData()} />}
				fileName="dom"
			>
				{({ loading }) =>
					loading ? (
						<div className="btn--data">
							<button disabled>Exportation ...</button>
						</div>
					) : (
						<div className="btn--data">
							<button>Exporter en pdf</button>
						</div>
					)
				}
			</PDFDownloadLink>
		</main>
	);
}

export default App;
