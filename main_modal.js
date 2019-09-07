Vue.component('modal',{
	template:`
		<div class="modal is-active">
				<div class="modal-background"></div>
				<div class="modal-content">
					<div class="box">
					    <slot></slot>
					</div>
				<!-- Any other Bulma elements you want -->
				</div>
			<button class="modal-close is-large" @click="$emit('close')"></button>
		</div>
	`
});

new Vue({
	el:'#app',
	data:{
		ShowModal : false
	}
})