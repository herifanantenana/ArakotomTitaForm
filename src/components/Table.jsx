/* eslint-disable react/prop-types */
function Table({ stepId, id, title, headers, tableValues, onChange }) {
	return (
		<div className="form--table">
			<h4>{title}</h4>
			<table className={headers.length <= 3 ? "short--table" : ""}>
				<thead>
					<tr>
						{headers.map((head, index) => (
							<th key={`head${stepId}${id}${index + 1}`}>{head}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{tableValues.map((row, rowIndex) => (
						<tr key={`row${stepId}${id}${rowIndex + 1}`}>
							{headers.map((head, headIndex) => (
								<td key={`cell${stepId}${id}${headIndex + 1}_${rowIndex + 1}`}>
									<input
										type="text"
										placeholder="À remplir"
										onChange={(e) =>
											onChange(e, {
												value: e.target.value,
												indexSub: id,
												rowIndex,
												headIndex,
											})
										}
									/>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
export default Table;
