<template>
	<div>
		<v-container class="teal">
			Total Expenses: ₹{{ expenseValue }}
		</v-container>
		<div class="form">
			<form @submit.prevent="addDetails" class="form-inline">
				<label for="name">Expense Name:</label>
				<input
					type="text"
					id="name"
					placeholder="Enter name"
					name="name"
					v-model="name"
				/>
				<label for="value">Value:</label>
				<input
					type="number"
					id="value"
					placeholder="Enter value"
					name="value"
					v-model="value"
				/>
				<label for="date">Date:</label>
				<input
					type="date"
					id="date"
					placeholder="Enter date"
					name="date"
					v-model="date"
				/>
				<v-btn elevation="2" class="teal"
					><button type="submit">Add</button></v-btn
				>
			</form>
		</div>
		<v-simple-table>
			<template v-slot:default>
				<thead>
					<tr>
						<th class="text-left">Name</th>
						<th class="text-left">Amount</th>
						<th class="text-left">Date</th>
						<th class="text-left">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="expense in expenses" :key="expense.id">
						<td class="text-left">{{ expense.name }}</td>
						<td class="text-left">{{ expense.value }}</td>
						<td class="text-left">{{ expense.date }}</td>
						<td>
							<v-btn class="text-left red" @click="deleteContent(expense)">
								Delete
							</v-btn>
						</td>
					</tr>
				</tbody>
			</template>
		</v-simple-table>
	</div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";

export default {
	name: "Main",
	data() {
		return {
			name: "",
			value: null,
			date: "",
		};
	},
	computed: {
		...mapGetters(["expenseValue"]),
		...mapState(["expenses"]),
	},
	methods: {
		...mapMutations(["ADD_EXPENSE", "ADD_VALUE"]),
		...mapActions(["removeExpense"]),

		addDetails: function () {
			this.ADD_EXPENSE({
				id: Date.now(),
				name: this.name,
				value: this.value,
				date: this.date,
			});
			this.ADD_VALUE(parseInt(this.value)),
				(this.name = ""),
				(this.value = ""),
				(this.date = "");
		},
		deleteContent(expense) {
			this.removeExpense(expense);
		},
	},
};
</script>

<style scoped>
.form {
	margin: auto;
	margin-top: 20px;
	width: 80%;
	padding: 10px;
}
.form-inline {
	display: flex;
	flex-flow: row wrap;
	align-items: center;
}

/* Add some margins for each label */
.form-inline label {
	margin: 5px 10px 5px 0;
}

/* Style the input fields */
.form-inline input {
	vertical-align: middle;
	margin: 5px 10px 5px 0;
	padding: 10px;
	background-color: #fff;
	border: 1px solid #ddd;
}

/* Style the submit button */
.form-inline button {
	padding: 10px 20px;
	color: white;
}

.form-inline button:hover {
	background-color: royalblue;
}
.wrapper {
	display: grid;
	max-width: 960px;
	margin: 0 auto;
}

p,
h3 {
	grid-column: span 3;
}
</style>

