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

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI } from '../runtime';
import {
    ResponseEntity,
    VaccineTypeDTO,
} from '../models';

export interface CheckVaccineTypeCodeUsingGETRequest {
    code: string;
}

export interface DeleteVaccineTypeUsingDELETERequest {
    code: string;
}

export interface NewVaccineTypeUsingPOSTRequest {
    newVaccineType: VaccineTypeDTO;
}

export interface UpdateVaccineTypeUsingPUTRequest {
    updateVaccineType: VaccineTypeDTO;
}

/**
 * no description
 */
export class VaccineTypeControllerApi extends BaseAPI {

    /**
     * checkVaccineTypeCode
     */
    checkVaccineTypeCodeUsingGET = ({ code }: CheckVaccineTypeCodeUsingGETRequest): Observable<boolean> => {
        throwIfNullOrUndefined(code, 'checkVaccineTypeCodeUsingGET');

        return this.request<boolean>({
            path: '/vaccinetype/check/{code}'.replace('{code}', encodeURI(code)),
            method: 'GET',
        });
    };

    /**
     * deleteVaccineType
     */
    deleteVaccineTypeUsingDELETE = ({ code }: DeleteVaccineTypeUsingDELETERequest): Observable<ResponseEntity> => {
        throwIfNullOrUndefined(code, 'deleteVaccineTypeUsingDELETE');

        return this.request<ResponseEntity>({
            path: '/vaccinetype/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
        });
    };

    /**
     * getVaccineType
     */
    getVaccineTypeUsingGET = (): Observable<Array<VaccineTypeDTO>> => {
        return this.request<Array<VaccineTypeDTO>>({
            path: '/vaccinetype',
            method: 'GET',
        });
    };

    /**
     * newVaccineType
     */
    newVaccineTypeUsingPOST = ({ newVaccineType }: NewVaccineTypeUsingPOSTRequest): Observable<ResponseEntity> => {
        throwIfNullOrUndefined(newVaccineType, 'newVaccineTypeUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<ResponseEntity>({
            path: '/vaccinetype',
            method: 'POST',
            headers,
            body: newVaccineType,
        });
    };

    /**
     * updateVaccineType
     */
    updateVaccineTypeUsingPUT = ({ updateVaccineType }: UpdateVaccineTypeUsingPUTRequest): Observable<ResponseEntity> => {
        throwIfNullOrUndefined(updateVaccineType, 'updateVaccineTypeUsingPUT');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<ResponseEntity>({
            path: '/vaccinetype',
            method: 'PUT',
            headers,
            body: updateVaccineType,
        });
    };

}