/// <reference types = "Cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import selectors from '../support/selectors_cem.js'
import { data } from '../fixtures/params.json'

describe('saving calculator - heating cost calculator tests', () => {

    beforeEach(() => {
        cy.visit('  https://consumersenergymanagement.ca/savings-calculator/')
        cy.get(selectors.calculator_province).select('Ontario')
        cy.get(selectors.calculator_city).select('Toronto')
        cy.get(selectors.calculator_stories).select('2')
        cy.get(selectors.calculator_sqft).select('2000')
        cy.get(selectors.calculator_years).type('20')
        cy.get(selectors.calculator_gasTherm).clear().type('1.20{enter}')
        cy.get(selectors.calculator_propaneGal).clear().type('4.00{enter}')
        cy.get(selectors.calculator_oilGal).clear().type('4.25{enter}')
        cy.get(selectors.calculator_summerKWHR).clear().type('0.14{enter}')
        cy.get(selectors.calculator_winterKWHR).clear().type('0.10{enter}')
    })


    it('verifies changes of current heating costs depending on current heating system Natural Gas', () => {
        cy.get(selectors.calculator_currentheat).select("Natural Gas").invoke('val').should('eq', 'aNaturalGas');
        cy.get(selectors.calculator_chc).invoke('text').should('eq', '$4,620.00')
    })

    it('verifies changes of current heating costs depending on current heating system Prpane', () => {
        cy.get(selectors.calculator_currentheat).select("Propane").invoke('val').should('eq', 'Propane');
        cy.get(selectors.calculator_chc).invoke('text').should('eq', '$16,739.13')
    })

    it('verifies changes of current heating costs depending on current heating system Oil', () => {
        cy.get(selectors.calculator_currentheat).select("Oil").invoke('val').should('eq', 'Oil');
        cy.get(selectors.calculator_chc).invoke('text').should('eq', '$11,771.58')
    })

    it('verifies changes of current heating costs depending on current heating system Electric', () => {
        cy.get(selectors.calculator_currentheat).select("Electric").invoke('val').should('eq', 'Electric');
        cy.get(selectors.calculator_chc).invoke('text').should('eq', '$6,204.22')
    })

    it('verifies changes of current heating costs depending on current heating system Heat Pump', () => {
        cy.get(selectors.calculator_currentheat).select("Heat Pump").invoke('val').should('eq', 'HeatPump');
        cy.get(selectors.calculator_chc).invoke('text').should('eq', '$4,473.24')
    })

    it('verifies changes of all savings depending on new heating system Natural Gas', () => {
        cy.get(selectors.calculator_newheat).select("Natural Gas").invoke('val').should('eq', 'bNaturalGas')
        cy.get(selectors.calculator_nhc).invoke('text').should('eq', '$4,620.00')
    })

    it('verifies changes of all savings depending on new heating system Propane', () => {
        cy.get(selectors.calculator_newheat).select("Propane").invoke('val').should('eq', 'Propane')
        cy.get(selectors.calculator_nhc).invoke('text').should('eq', '$16,739.13')
    })

    it('verifies changes of all savings depending on new heating system Oil', () => {
        cy.get(selectors.calculator_newheat).select("Oil").invoke('val').should('eq', 'Oil')
        cy.get(selectors.calculator_nhc).invoke('text').should('eq', '$11,771.58')
    })

    it('verifies changes of all savings depending on new heating system Electric', () => {
        cy.get(selectors.calculator_newheat).select("Electric").invoke('val').should('eq', 'Electric')
        cy.get(selectors.calculator_nhc).invoke('text').should('eq', '$6,204.22')
    })

    it('verifies changes of all savings depending on new heating system Heat Pump', () => {
        cy.get(selectors.calculator_newheat).select("Heat Pump").invoke('val').should('eq', 'HeatPump')
        cy.get(selectors.calculator_nhc).invoke('text').should('eq', '$4,473.24')
    })

    it('verifies changes of all savings depending on new heating system Dual Fuel-Natural gas', () => {
        cy.get(selectors.calculator_newheat).select("Dual Fuel-Natural Gas").invoke('val').should('eq', 'DualFuelNaturalGas')
        cy.get(selectors.calculator_nhc).invoke('text').should('eq', '$3,681.13')
    })

    it('verifies changes of all savings depending on new heating system Dual Fuel-Oil', () => {
        cy.get(selectors.calculator_newheat).select("Dual Fuel-Oil").invoke('val').should('eq', 'DualFuelOil')
        cy.get(selectors.calculator_nhc).invoke('text').should('eq', '$7,256.92')
    })

    it('verifies changes of all savings depending on new heating system Dual Fuel-Propane', () => {
        cy.get(selectors.calculator_newheat).select("Dual Fuel-Propane").invoke('val').should('eq', 'DualFuelPropane')
        cy.get(selectors.calculator_nhc).invoke('text').should('eq', '$9,740.70')
    })

    describe('verifies changes of all savings depending on new heating system where old heating systme is Natural Gas', () => {
        beforeEach(() => {
            cy.get(selectors.calculator_currentheat).select("Natural Gas").invoke('val').should('eq', 'aNaturalGas')
        })

        it('verifies changes of all savings depending on new heating system where old heating systme is Natural Gas', () => {

            it('verifies changes of all savings depending on new heating system Natural Gas', () => {
                cy.get(selectors.calculator_newheat).select("Propane").invoke('val').should('eq', 'bNatutralGas')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$0.00')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$0.00')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$0.00')
            })

            it('verifies changes of all savings depending on new heating system Propane', () => {
                cy.get(selectors.calculator_newheat).select("Propane").invoke('val').should('eq', 'Propane')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '-$12,119.13')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '-$12,119.13')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '-$121,191.30')
            })

            it('verifies changes of all savings depending on new heating system Oil', () => {
                cy.get(selectors.calculator_newheat).select("Oil").invoke('val').should('eq', 'Oil')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '-$7,151.58')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '-$7,151.58')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '-$71,515.83')
            })

            it('verifies changes of all savings depending on new heating system Electric', () => {
                cy.get(selectors.calculator_newheat).select("Electric").invoke('val').should('eq', 'Electric')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '-$1,584.22')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '-$1,584.22')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '-$15,842.19')
            })

            it('verifies changes of all savings depending on new heating system Heat Pump', () => {
                cy.get(selectors.calculator_newheat).select("Heat Pump").invoke('val').should('eq', 'HeatPump')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$146.76')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$146.76')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$1,467.58')
            })

            it('verifies changes of all savings depending on new heating system Dual Fuel-Natural gas', () => {
                cy.get(selectors.calculator_newheat).select("Dual Fuel-Natural Gas").invoke('val').should('eq', 'DualFuelNaturalGas')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$938.87')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$938.87')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$9,388.68')
            })

            it('verifies changes of all savings depending on new heating system Dual Fuel-Oil', () => {
                cy.get(selectors.calculator_newheat).select("Dual Fuel-Oil").invoke('val').should('eq', 'DualFuelOil')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '-$2,636.92')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '-$2,636.92')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '-$26,369.24')
            })

            it('verifies changes of all savings depending on new heating system Dual Fuel-Propane', () => {
                cy.get(selectors.calculator_newheat).select("Dual Fuel-Propane").invoke('val').should('eq', 'DualFuelPropane')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '-$5,120.70')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '-$5,120.70')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '-$51,206.98')
            })

        })
    })
    describe('verifies changes of annual heateing savings depending on new heating system where old heating systme is Propane', () => {

        beforeEach(() => {
            cy.get(selectors.calculator_currentheat).select("Propane").invoke('val').should('eq', 'Propane')
        })

        it('verifies changes of annual heateing savings depending on new heating system where old heating systme is Propane', () => {

            it('verifies changes of all savings depending on new heating system Natural Gas', () => {
                cy.get(selectors.calculator_newheat).select("Propane").invoke('val').should('eq', 'bNatutralGas')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$12,119.13')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$12,119.13')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$121,191.30')
            })

            it('verifies changes of all savings depending on new heating system Propane', () => {
                cy.get(selectors.calculator_newheat).select("Propane").invoke('val').should('eq', 'Propane')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$0.00')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$0.00')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$0.00')
            })

            it('verifies changes of all savings depending on new heating system Oil', () => {
                cy.get(selectors.calculator_newheat).select("Oil").invoke('val').should('eq', 'Oil')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$4,967.55')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$4,967.55')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$49,675.48')
            })

            it('verifies changes of all savings depending on new heating system Electric', () => {
                cy.get(selectors.calculator_newheat).select("Electric").invoke('val').should('eq', 'Electric')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$10,534.91')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$10,534.91')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$105,349.11')
            })

            it('verifies changes of all savings depending on new heating system Heat Pump', () => {
                cy.get(selectors.calculator_newheat).select("Heat Pump").invoke('val').should('eq', 'HeatPump')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$12,265.89')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$12,265.89')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$122,658.88')
            })

            it('verifies changes of all savings depending on new heating system Dual Fuel-Natural gas', () => {
                cy.get(selectors.calculator_newheat).select("Dual Fuel-Natural Gas").invoke('val').should('eq', 'DualFuelNaturalGas')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$13,058.00')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$13,058.00')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$130,579.98')
            })

            it('verifies changes of all savings depending on new heating system Dual Fuel-Oil', () => {
                cy.get(selectors.calculator_newheat).select("Dual Fuel-Oil").invoke('val').should('eq', 'DualFuelOil')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$9,482.21')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$9,482.21')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$94,822.07')
            })

            it('verifies changes of all savings depending on new heating system Dual Fuel-Propane', () => {
                cy.get(selectors.calculator_newheat).select("Dual Fuel-Propane").invoke('val').should('eq', 'DualFuelPropane')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$6,998.43')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$6,998.43')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$69,984.33')
            })
        })
    })

    describe('verifies changes of all savings depending on new heating system where old heating systme is Oil', () => {

        beforeEach(() => {
            cy.get(selectors.calculator_currentheat).select("Oil").invoke('val').should('eq', 'Oil')

        })


        it('verifies changes of all savings depending on new heating system where old heating systme is Oil', () => {

            it('verifies changes of all savings depending on new heating system Natural Gas', () => {
                cy.get(selectors.calculator_newheat).select("Propane").invoke('val').should('eq', 'bNatutralGas')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$7,151.58')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$7,151.58')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$71,515.83')
            })

            it('verifies changes of all savings depending on new heating system Propane', () => {
                cy.get(selectors.calculator_newheat).select("Propane").invoke('val').should('eq', 'Propane')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '-$4,967.55')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '-$4,967.55')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '-$49,675.48')
            })

            it('verifies changes of all savings depending on new heating system Oil', () => {
                cy.get(selectors.calculator_newheat).select("Oil").invoke('val').should('eq', 'Oil')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$0.00')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$0.00')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$0.00')
            })

            it('verifies changes of all savings depending on new heating system Electric', () => {
                cy.get(selectors.calculator_newheat).select("Electric").invoke('val').should('eq', 'Electric')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$5,567.36')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$5,567.36')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$55,673.64')
            })

            it('verifies changes of all savings depending on new heating system Heat Pump', () => {
                cy.get(selectors.calculator_newheat).select("Heat Pump").invoke('val').should('eq', 'HeatPump')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$7,298.34')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$7,298.34')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$7,298.34')
            })

            it('verifies changes of all savings depending on new heating system Dual Fuel-Natural gas', () => {
                cy.get(selectors.calculator_newheat).select("Dual Fuel-Natural Gas").invoke('val').should('eq', 'DualFuelNaturalGas')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$8,090.45')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$8,090.45')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$80,904.50')
            })

            it('verifies changes of all savings depending on new heating system Dual Fuel-Oil', () => {
                cy.get(selectors.calculator_newheat).select("Dual Fuel-Oil").invoke('val').should('eq', 'DualFuelOil')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$4,514.66')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$4,514.66')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$45,146.59')
            })

            it('verifies changes of all savings depending on new heating system Dual Fuel-Propane', () => {
                cy.get(selectors.calculator_newheat).select("Dual Fuel-Propane").invoke('val').should('eq', 'DualFuelPropane')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$2,030.89')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$2,030.89')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$20,308.85')
            })
        })
    })

    describe('verifies changes of all savings depending on new heating system where old heating systme is Electric', () => {

        beforeEach(() => {
            cy.get(selectors.calculator_currentheat).select("Electric").invoke('val').should('eq', 'Electric')
        })

        it('verifies changes of all savings depending on new heating system where old heating systme is Electric', () => {

            it('verifies changes of all savings depending on new heating system Natural Gas', () => {
                cy.get(selectors.calculator_newheat).select("Propane").invoke('val').should('eq', 'bNatutralGas')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$1,584.22')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$1,584.22')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$15,842.19')
            })

            it('verifies changes of all savings depending on new heating system Propane', () => {
                cy.get(selectors.calculator_newheat).select("Propane").invoke('val').should('eq', 'Propane')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '-$10,534.91')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '-$10,534.91')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '-$105,349.11')
            })

            it('verifies changes of all savings depending on new heating system Oil', () => {
                cy.get(selectors.calculator_newheat).select("Oil").invoke('val').should('eq', 'Oil')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '-$5,567.36')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '-$5,567.36')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '-$55,673.64')
            })

            it('verifies changes of all savings depending on new heating system Electric', () => {
                cy.get(selectors.calculator_newheat).select("Electric").invoke('val').should('eq', 'Electric')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$0.00')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$0.00')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$0.00')
            })

            it('verifies changes of all savings depending on new heating system Heat Pump', () => {
                cy.get(selectors.calculator_newheat).select("Heat Pump").invoke('val').should('eq', 'HeatPump')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$1,730.98')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$1,730.98')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$17,309.77')
            })

            it('verifies changes of all savings depending on new heating system Dual Fuel-Natural gas', () => {
                cy.get(selectors.calculator_newheat).select("Dual Fuel-Natural Gas").invoke('val').should('eq', 'DualFuelNaturalGas')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$2,523.09')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$2,523.09')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$25,230.87')
            })

            it('verifies changes of all savings depending on new heating system Dual Fuel-Oil', () => {
                cy.get(selectors.calculator_newheat).select("Dual Fuel-Oil").invoke('val').should('eq', 'DualFuelOil')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '-$1,052.70')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '-$1,052.70')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '-$10,527.05')
            })

            it('verifies changes of all savings depending on new heating system Dual Fuel-Propane', () => {
                cy.get(selectors.calculator_newheat).select("Dual Fuel-Propane").invoke('val').should('eq', 'DualFuelPropane')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '-$3,536.48')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '-$3,536.48')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '-$35,364.78')
            })
        })
    })

    describe('verifies changes of all savings depending on new heating system where old heating systme is Heat Pump', () => {

        beforeEach(() => {
            cy.get(selectors.calculator_currentheat).select("HeatPump").invoke('val').should('eq', 'HeatPump')
        })

        it('verifies changes of all savings depending on new heating system where old heating systme is Heat Pump', () => {

            it('verifies changes of all savings depending on new heating system Natural Gas', () => {
                cy.get(selectors.calculator_newheat).select("Propane").invoke('val').should('eq', 'bNatutralGas')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '-$146.76')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '-$146.76')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '-$1,467.58')
            })

            it('verifies changes of all savings depending on new heating system Propane', () => {
                cy.get(selectors.calculator_newheat).select("Propane").invoke('val').should('eq', 'Propane')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '-$12,265.89')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '-$12,265.89')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '-$122,658.88')
            })

            it('verifies changes of all savings depending on new heating system Oil', () => {
                cy.get(selectors.calculator_newheat).select("Oil").invoke('val').should('eq', 'Oil')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '-$7,298.34')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '-$7,298.34')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '-$72,983.41')
            })

            it('verifies changes of all savings depending on new heating system Electric', () => {
                cy.get(selectors.calculator_newheat).select("Electric").invoke('val').should('eq', 'Electric')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '-$1,730.98')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '-$1,730.98')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '-$17,309.77')
            })

            it('verifies changes of all savings depending on new heating system Heat Pump', () => {
                cy.get(selectors.calculator_newheat).select("Heat Pump").invoke('val').should('eq', 'HeatPump')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$0.00')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$0.00')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$0.00')
            })

            it('verifies changes of all savings depending on new heating system Dual Fuel-Natural gas', () => {
                cy.get(selectors.calculator_newheat).select("Dual Fuel-Natural Gas").invoke('val').should('eq', 'DualFuelNaturalGas')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '$792.11')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '$792.11')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '$7,921.10')
            })

            it('verifies changes of all savings depending on new heating system Dual Fuel-Oil', () => {
                cy.get(selectors.calculator_newheat).select("Dual Fuel-Oil").invoke('val').should('eq', 'DualFuelOil')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '-$2,783.68')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '-$2,783.68')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '-$27,836.82')
            })

            it('verifies changes of all savings depending on new heating system Dual Fuel-Propane', () => {
                cy.get(selectors.calculator_newheat).select("Dual Fuel-Propane").invoke('val').should('eq', 'DualFuelPropane')
                cy.get(selectors.calculator_ahs).invoke('text').should('eq', '-$5,267.46')
                cy.get(selectors.calculator_totalAnnualSavings).invoke('text').should('eq', '-$5,267.46')
                cy.get(selectors.calculator_10YearSavings).invoke('text').should('eq', '-$52,674.56')
            })
        })

    })





    // it('verifies total annual and 10 years savings changes depending on current and new heating systems', () => {
    //     cy.get(selectors.calculator_totalAnnualSavings).invoke('text').then(initialValueTAS => {
    //         cy.get(selectors.calculator_10YearSavings).invoke('text').then(initialValue10YS => {
    //             cy.get(selectors.calculator_currentheat).select("Natural Gas").invoke('val').should('eq', 'aNaturalGas')
    //             cy.get(selectors.calculator_newheat).select("Heat Pump").invoke('val').should('eq', 'HeatPump')
    //             cy.get(selectors.calculator_chc).invoke('text').should('not.equal', initialValueTAS)
    //             cy.get(selectors.calculator_chc).invoke('text').should('not.equal', initialValue10YS)
    //         })
    //     })
    // })
    // it('verifies annual and 10 year savings changing depending on a change of current and new heating systems', () => {
    //     cy.get(selectors.calculator_totalAnnualSavings).invoke('text').then(initialValueTAS1 => {
    //         cy.get(selectors.calculator_10YearSavings).invoke('text').then(initialValue10YS1 => {
    //             cy.get(selectors.calculator_currentheat).select("Natural Gas").invoke('val').should('eq', 'aNaturalGas')
    //             cy.get(selectors.calculator_newheat).select("Heat Pump").invoke('val').should('eq', 'HeatPump')
    //             cy.get(selectors.calculator_chc).invoke('text').should('not.equal', initialValueTAS1)
    //             cy.get(selectors.calculator_chc).invoke('text').should('not.equal', initialValue10YS1)
    //         })

    //     })
    //     cy.get(selectors.calculator_totalAnnualSavings).invoke('text').then(initialValueTAS2 => {
    //         cy.get(selectors.calculator_10YearSavings).invoke('text').then(initialValue10YS2 => {
    //             cy.get(selectors.calculator_currentheat).select("Oil").invoke('val').should('eq', 'Oil')
    //             cy.get(selectors.calculator_newheat).select("Electric").invoke('val').should('eq', 'Electric')
    //             cy.get(selectors.calculator_chc).invoke('text').should('not.equal', initialValueTAS2)
    //             cy.get(selectors.calculator_chc).invoke('text').should('not.equal', initialValue10YS2)
    //         })
    //     })
    // })
})

