/* eslint-disable react/prop-types */
function Choix({ stepId, id, title, options, selected, onSelect }) {
	return (
		<div className="form--choice">
			<h4>{title}</h4>
			<div className="list--choice">
				{options.map((option, index) => (
					<label
						className={selected === option ? "checked" : "unchecked"}
						key={`option${stepId}${id}${index + 1}`}
						htmlFor={`option${stepId}${id}${index + 1}`}
					>
						<input
							type="radio"
							id={`option${stepId}${id}${index + 1}`}
							name={`option${stepId}${id}`}
							value={option}
							checked={selected === option}
							onChange={(e) =>
								onSelect(e, { value: e.target.value, indexSub: id })
							}
						/>
						{option}
					</label>
				))}
			</div>
		</div>
	);
}

export default Choix;
