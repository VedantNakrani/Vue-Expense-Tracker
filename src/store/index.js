import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        amount: null,
        expenses: [],
        values: [1,2,3]
    },
    mutations: {
        ADD_EXPENSE: (state, expensesPayload) => {
            state.expenses.push(expensesPayload)
            console.log(state.expenses)
        },
        ADD_VALUE: (state, valuePayload) => {
            state.values.push(valuePayload)
        },
        REMOVE_EXPENSE: (state, expense) => {
            state.expenses = state.expenses.filter(item => item.id != expense.id)
            const index = state.expenses.indexOf(parseInt(expense.value))

            if (index > -1) {
                state.expenses.splice(index, 1)
            }
        }
    },
    actions: {
        removeExpense: (context, expense) => {
            context.commit('REMOVE_EXPENSE', expense)
        }
    },
    getters: {
        expenseValue: state => {
            return state.amount = state.values.reduce((a, b) => { return a + b }, 0)
        }
    },
})
