/* eslint-disable react/prop-types */
import Observation from "../Observation";

function Step9({ data, onChange }) {
	function onChangeStep(event, { value, indexSub, rowIndex, headIndex }) {
		onChange(event, data.id, { value, indexSub, rowIndex, headIndex });
	}

	return (
		<section className="step">
			<h2>
				Etape {data.id} : {data.title}
			</h2>
			<div className="content--step list--step">
				<Observation
					stepId={data.id}
					{...data.subStep[0]}
					onChange={onChangeStep}
				/>{" "}
			</div>
		</section>
	);
}

export default Step9;
