// tslint:disable
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    TimeZone,
} from './';

/**
 * @export
 * @interface GregorianCalendar
 */
export interface GregorianCalendar {
    /**
     * @type {string}
     * @memberof GregorianCalendar
     */
    calendarType?: string;
    /**
     * @type {number}
     * @memberof GregorianCalendar
     */
    fieldsComputed?: number;
    /**
     * @type {number}
     * @memberof GregorianCalendar
     */
    fieldsNormalized?: number;
    /**
     * @type {number}
     * @memberof GregorianCalendar
     */
    firstDayOfWeek?: number;
    /**
     * @type {string}
     * @memberof GregorianCalendar
     */
    gregorianChange?: string;
    /**
     * @type {boolean}
     * @memberof GregorianCalendar
     */
    lenient?: boolean;
    /**
     * @type {number}
     * @memberof GregorianCalendar
     */
    minimalDaysInFirstWeek?: number;
    /**
     * @type {string}
     * @memberof GregorianCalendar
     */
    time?: string;
    /**
     * @type {number}
     * @memberof GregorianCalendar
     */
    timeInMillis?: number;
    /**
     * @type {TimeZone}
     * @memberof GregorianCalendar
     */
    timeZone?: TimeZone;
    /**
     * @type {object}
     * @memberof GregorianCalendar
     */
    weekCountData?: object;
    /**
     * @type {boolean}
     * @memberof GregorianCalendar
     */
    weekDateSupported?: boolean;
    /**
     * @type {number}
     * @memberof GregorianCalendar
     */
    weekYear?: number;
    /**
     * @type {number}
     * @memberof GregorianCalendar
     */
    weeksInWeekYear?: number;
    /**
     * @type {boolean}
     * @memberof GregorianCalendar
     */
    zoneShared?: boolean;
}
