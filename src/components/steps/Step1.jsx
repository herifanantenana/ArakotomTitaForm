/* eslint-disable react/prop-types */
import Champ from "../Champ";
import Choix from "../Choix";
import Cocher from "../Cocher";
import Observation from "../Observation";
import Table from "../Table";

function Step1({ data, onChange }) {
	function onChangeStep(event, { value, indexSub, rowIndex, headIndex }) {
		onChange(event, data.id, { value, indexSub, rowIndex, headIndex });
	}

	return (
		<section className="step">
			<h2>
				Etape {data.id} : {data.title}
			</h2>
			<div className=" content--step list--step">
				<Choix stepId={data.id} {...data.subStep[0]} onSelect={onChangeStep} />
				<Champ stepId={data.id} {...data.subStep[1]} onChange={onChangeStep} />
				<Choix stepId={data.id} {...data.subStep[2]} onSelect={onChangeStep} />
				<Choix stepId={data.id} {...data.subStep[3]} onSelect={onChangeStep} />
				<Table stepId={data.id} {...data.subStep[4]} onChange={onChangeStep} />
				<p className="link--file">
					Lien : &nbsp;
					<a href="/files/bilanxlsx..xlsx" download>
						Bilan énergétique des charges
					</a>
				</p>
				<Choix stepId={data.id} {...data.subStep[5]} onSelect={onChangeStep} />
				<Cocher stepId={data.id} {...data.subStep[6]} onCheck={onChangeStep} />
				<Observation
					stepId={data.id}
					{...data.subStep[7]}
					onChange={onChangeStep}
				/>
			</div>
		</section>
	);
}

export default Step1;
