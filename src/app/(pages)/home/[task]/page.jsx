"use client";

function TaskPage({ params }) {
	console.log(params.task);
	return <div>page : {params.task} </div>;
}

export default TaskPage;
