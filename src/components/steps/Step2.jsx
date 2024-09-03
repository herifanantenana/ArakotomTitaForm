/* eslint-disable react/prop-types */
import Champ from "../Champ";
import Observation from "../Observation";
import Table from "../Table";

function SubStep({ title, children }) {
	return (
		<div className="sub--step">
			<h3>{title}</h3>
			{children}
		</div>
	);
}

function Step2({ data, onChange }) {
	function onChangeStep(event, { value, indexSub, rowIndex, headIndex }) {
		onChange(event, data.id, { value, indexSub, rowIndex, headIndex });
	}

	return (
		<section className="step">
			<h2>
				Etape {data.id} : {data.title}
			</h2>
			<div className="content--step">
				<SubStep title="Dimensionnement">
					<div className="list--step">
						<Table
							stepId={data.id}
							{...data.subStep[0]}
							onChange={onChangeStep}
						/>
						<Table
							stepId={data.id}
							{...data.subStep[1]}
							onChange={onChangeStep}
						/>
						<Table
							stepId={data.id}
							{...data.subStep[2]}
							onChange={onChangeStep}
						/>
					</div>
				</SubStep>
				<SubStep title="Emplacement des panneaux ">
					<div className="list--step">
						<Champ
							stepId={data.id}
							{...data.subStep[3]}
							onChange={onChangeStep}
						/>
						<Champ
							stepId={data.id}
							{...data.subStep[4]}
							onChange={onChangeStep}
						/>
					</div>
				</SubStep>
				<Observation
					stepId={data.id}
					{...data.subStep[5]}
					onChange={onChangeStep}
				/>
			</div>
		</section>
	);
}
export default Step2;
