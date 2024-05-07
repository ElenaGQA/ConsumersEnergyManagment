/// <reference types = "Cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import selectors from '../support/selectors_cem.js'
import { data } from '../fixtures/params.json'

describe('saving calculator - locations tests', () => {

    beforeEach(() => {
        cy.visit('  https://consumersenergymanagement.ca/savings-calculator/')
        cy.get(selectors.calculator_province).select('Ontario')
        cy.get(selectors.calculator_city).select('Toronto')
        cy.get(selectors.calculator_stories).select('2')
        cy.get(selectors.calculator_sqft).select('2000')
        cy.get(selectors.calculator_years).type('20')
        cy.get(selectors.calculator_gasTherm).clear().type('1.45{enter}')
        cy.get(selectors.calculator_propaneGal).clear().type('5.75{enter}')
        cy.get(selectors.calculator_oilGal).clear().type('3.90{enter}')
        cy.get(selectors.calculator_summerKWHR).clear().type('0.12{enter}')
        cy.get(selectors.calculator_winterKWHR).clear().type('0.1{enter}')
    })


    it('verifies changes of current heating costs depending on current heating system', () => {
        cy.get(selectors.calculator_chc).invoke('text').then(initialValue1 => {

            cy.get(selectors.calculator_currentheat).select("Natural Gas").invoke('val').should('eq', 'aNaturalGas');
            cy.get(selectors.calculator_chc).invoke('text').should('not.equal', initialValue1);

        })

        cy.get(selectors.calculator_chc).invoke('text').then(initialValue1 => {

            cy.get(selectors.calculator_currentheat).select("Propane").invoke('val').should('eq', 'Propane');
            cy.get(selectors.calculator_chc).invoke('text').should('not.equal', initialValue1);

        })

        cy.get(selectors.calculator_chc).invoke('text').then(initialValue1 => {

            cy.get(selectors.calculator_currentheat).select("Oil").invoke('val').should('eq', 'Oil');
            cy.get(selectors.calculator_chc).invoke('text').should('not.equal', initialValue1);

        })

        cy.get(selectors.calculator_chc).invoke('text').then(initialValue1 => {

            cy.get(selectors.calculator_currentheat).select("Electric").invoke('val').should('eq', 'Electric');
            cy.get(selectors.calculator_chc).invoke('text').should('not.equal', initialValue1);

        })

        cy.get(selectors.calculator_chc).invoke('text').then(initialValue1 => {

            cy.get(selectors.calculator_currentheat).select("Heat Pump").invoke('val').should('eq', 'HeatPump');
            cy.get(selectors.calculator_chc).invoke('text').should('not.equal', initialValue1);

        })

    })

    it('verifies chnges of new heating costs depending on new heating system', () => {

        cy.get(selectors.calculator_nhc).invoke('text').then(initialValue2 => {

            cy.get(selectors.calculator_newheat).select("Natural Gas").invoke('val').should('eq', 'bNaturalGas')
            cy.get(selectors.calculator_nhc).invoke('text').should('not.equal', initialValue2)

        })

        cy.get(selectors.calculator_nhc).invoke('text').then(initialValue2 => {

            cy.get(selectors.calculator_newheat).select("Propane").invoke('val').should('eq', 'Propane')
            cy.get(selectors.calculator_nhc).invoke('text').should('not.equal', initialValue2)

        })

        cy.get(selectors.calculator_nhc).invoke('text').then(initialValue2 => {

            cy.get(selectors.calculator_newheat).select("Oil").invoke('val').should('eq', 'Oil')
            cy.get(selectors.calculator_nhc).invoke('text').should('not.equal', initialValue2)

        })

        cy.get(selectors.calculator_nhc).invoke('text').then(initialValue2 => {

            cy.get(selectors.calculator_newheat).select("Electric").invoke('val').should('eq', 'Electric')
            cy.get(selectors.calculator_nhc).invoke('text').should('not.equal', initialValue2)

        })

        cy.get(selectors.calculator_nhc).invoke('text').then(initialValue2 => {

            cy.get(selectors.calculator_newheat).select("Heat Pump").invoke('val').should('eq', 'HeatPump')
            cy.get(selectors.calculator_nhc).invoke('text').should('not.equal', initialValue2)

        })

        cy.get(selectors.calculator_nhc).invoke('text').then(initialValue2 => {

            cy.get(selectors.calculator_newheat).select("Dual Fuel-Natural Gas").invoke('val').should('eq', 'DualFuelNaturalGas')
            cy.get(selectors.calculator_nhc).invoke('text').should('not.equal', initialValue2)

        })

        cy.get(selectors.calculator_nhc).invoke('text').then(initialValue2 => {

            cy.get(selectors.calculator_newheat).select("Dual Fuel-Oil").invoke('val').should('eq', 'DualFuelOil')
            cy.get(selectors.calculator_nhc).invoke('text').should('not.equal', initialValue2)

        })

        cy.get(selectors.calculator_nhc).invoke('text').then(initialValue2 => {

            cy.get(selectors.calculator_newheat).select("Dual Fuel-Propane").invoke('val').should('eq', 'DualFuelPropane')
            cy.get(selectors.calculator_nhc).invoke('text').should('not.equal', initialValue2)

        })

    })

    it('verifies current and new heating costs depending on current and new heating systems', () => {

        cy.get(selectors.calculator_totalAnnualSavings).invoke('text').then(initialValueTAS => {
            cy.get(selectors.calculator_10YearSavings).invoke('text').then(initialValue10YS => {

            cy.get(selectors.calculator_currentheat).select("Natural Gas").invoke('val').should('eq', 'aNaturalGas')
            cy.get(selectors.calculator_newheat).select("Heat Pump").invoke('val').should('eq', 'HeatPump')
            cy.get(selectors.calculator_chc).invoke('text').should('not.equal', initialValueTAS)
            cy.get(selectors.calculator_chc).invoke('text').should('not.equal', initialValue10YS)
            })

        })



    })

    it('verifies annual and 10 year savings changing depending on a change of current and new heating systems', () => {

        cy.get(selectors.calculator_totalAnnualSavings).invoke('text').then(initialValueTAS1 => {
            cy.get(selectors.calculator_10YearSavings).invoke('text').then(initialValue10YS1 => {

            cy.get(selectors.calculator_currentheat).select("Natural Gas").invoke('val').should('eq', 'aNaturalGas')
            cy.get(selectors.calculator_newheat).select("Heat Pump").invoke('val').should('eq', 'HeatPump')
            cy.get(selectors.calculator_chc).invoke('text').should('not.equal', initialValueTAS1)
            cy.get(selectors.calculator_chc).invoke('text').should('not.equal', initialValue10YS1)
            })

        })
        cy.get(selectors.calculator_totalAnnualSavings).invoke('text').then(initialValueTAS2 => {
            cy.get(selectors.calculator_10YearSavings).invoke('text').then(initialValue10YS2 => {

            cy.get(selectors.calculator_currentheat).select("Oil").invoke('val').should('eq', 'Oil')
            cy.get(selectors.calculator_newheat).select("Electric").invoke('val').should('eq', 'Electric')
            cy.get(selectors.calculator_chc).invoke('text').should('not.equal', initialValueTAS2)
            cy.get(selectors.calculator_chc).invoke('text').should('not.equal', initialValue10YS2)
            })

        })



    })
})