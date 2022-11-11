import { Request, Response } from "express";

const STATUS_CODE = Object.freeze({
    OK: 200,
	CREATED: 201,
	NO_CONTENT: 204,
	MOVED_PERMANENTLY: 301,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	NOT_FOUND: 404,
	CONFLICT: 409,
	UNPROCESSABLE_ENTITY: 422,
	SERVER_ERROR: 500
});

const STATUS_TEXT = Object.freeze({
	OK: "Ok",
	CREATED: "Created",
	NO_CONTENT: "No Content",
	MOVED_PERMANENTLY: "Moved Permanently",
	BAD_REQUEST: "Bad Request",
	UNAUTHORIZED: "Unauthorized",
	NOT_FOUND: "Not Found",
	CONFLICT: "Conflict",
	UNPROCESSABLE_ENTITY: "Unprocessable Entity",
	SERVER_ERROR: "Internal Server Error",
});

function okResponse(res: Response, text: string = STATUS_TEXT.OK) {
    return res.status(STATUS_CODE.OK).send(text);
}

function createdResponse(res: Response, text: string = STATUS_TEXT.CREATED) {
    return res.status(STATUS_CODE.CREATED).send(text);
}

function noContentResponse(res: Response, text: string = STATUS_TEXT.NO_CONTENT) {
    return res.status(STATUS_CODE.NO_CONTENT).send(text);
}

function movedPermanentlyResponse(res: Response, text: string = STATUS_TEXT.MOVED_PERMANENTLY) {
    return res.status(STATUS_CODE.MOVED_PERMANENTLY).send(text);
}

function badRequestResponse(res: Response, text: string = STATUS_TEXT.BAD_REQUEST) {
    return res.status(STATUS_CODE.BAD_REQUEST).send(text);
}

function unauthorizedResponse(res: Response, text: string = STATUS_TEXT.UNAUTHORIZED) {
    return res.status(STATUS_CODE.UNAUTHORIZED).send(text);
}

function notFoundResponse(res: Response, text: string = STATUS_TEXT.NOT_FOUND) {
    return res.status(STATUS_CODE.NOT_FOUND).send(text);
}

function conflictResponse(res: Response, text: string = STATUS_TEXT.CONFLICT) {
    return res.status(STATUS_CODE.CONFLICT).send(text);
}

function unprocessableEntityResponse(res: Response, text: string = STATUS_TEXT.UNPROCESSABLE_ENTITY) {
    return res.status(STATUS_CODE.UNPROCESSABLE_ENTITY).send(text);
}

function serverErrorResponse(res: Response, error: any, text: string = STATUS_TEXT.SERVER_ERROR) {
    console.error(error);
    return res.status(STATUS_CODE.SERVER_ERROR).send(text);
}

export {
	okResponse,
	createdResponse,
	noContentResponse,
	movedPermanentlyResponse,
	badRequestResponse,
	unauthorizedResponse,
	notFoundResponse,
	conflictResponse,
	unprocessableEntityResponse,
	serverErrorResponse
};