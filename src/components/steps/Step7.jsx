/* eslint-disable react/prop-types */
import Champ from "../Champ";
import Cocher from "../Cocher";
import Observation from "../Observation";

function Step7({ data, onChange }) {
	function onChangeStep(event, { value, indexSub, rowIndex, headIndex }) {
		onChange(event, data.id, { value, indexSub, rowIndex, headIndex });
	}

	return (
		<section className="step">
			<h2>
				Etape {data.id} : {data.title}
			</h2>
			<div className="content--step list--step">
				<Cocher stepId={data.id} {...data.subStep[0]} onCheck={onChangeStep} />
				<Champ stepId={data.id} {...data.subStep[1]} onChange={onChangeStep} />
				<Observation
					stepId={data.id}
					{...data.subStep[2]}
					onChange={onChangeStep}
				/>{" "}
			</div>
		</section>
	);
}

export default Step7;
