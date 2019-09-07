Vue.component('task-list',{
	template:`
				<div>
					<task v-for="task in tasks">{{ task.task }}</task>
				<div>
			`,
	data(){
		return {
			tasks:[
				{task: 'Go to zoo',complate:true},
				{task: 'Go to Pakishtan',complate:false},
				{task: 'Go to Canada',complate:false},
				{task: 'Go to Denmark',complate:true},
				{task: 'Go to US',complate:true}


			]
		};
	}
})

Vue.component('task',{
	template:'<li><slot></slot></li>'
})

new Vue({
	el:'#app'
	// data:{

	// }
	
})