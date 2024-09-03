/* eslint-disable react/prop-types */
function Cocher({ stepId, id, title, options, selected, onCheck }) {
	return (
		<div className="form--check">
			<h4>{title}</h4>
			<div className="list--option">
				{options.map((option, index) => (
					<div className="check--box" key={`option${stepId}${id}${index + 1}`}>
						<input
							type="checkbox"
							id={`option${stepId}${id}${index + 1}`}
							value={option}
							checked={selected.includes(option)}
							onChange={(e) => onCheck(e, { indexSub: id })}
						/>
						<label htmlFor={`option${index + 1}`}>{option} </label>
					</div>
				))}
			</div>
		</div>
	);
}

export default Cocher;
