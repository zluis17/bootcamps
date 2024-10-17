import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('bootcamps')
export class BootcampsController {

    @Get() 
    getAllBootcamps(): string {
    return "aqui se van a mostrar todos los bootcamps"
    } 

    @Get (":id")
    getBootCampById(@Param("id")bootcampId: number): string {
        return `Retorna el bootcamp con id: ${bootcampId} `
    }
    @Post()
    createBootcamp(): string {
        return "Aqui se ve el nuevo bootcamp"
    }
}