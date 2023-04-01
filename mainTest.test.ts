import {expect, jest, test} from '@jest/globals'
import { SearchSource } from 'jest'
import { Actions } from 'selenium-webdriver'
import { ShiftMainPageObject } from './mainPageObject'
const shiftMainPageObject = new ShiftMainPageObject()
// Test single test by using describe/only / or skip with describe.skip

jest.setTimeout(50000) // Move above P.O. const creation if any methods are timing out