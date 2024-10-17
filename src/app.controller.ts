import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';
import { Student } from './entidades/Student.entity';


@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}


  //EndPoint  Metodo cuando que se ejecuta cuando se invoca determinada URL  des  de el cliente http (Bruno)


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //ENpoint 
  //Metodo (verbo) HTTP A UTILIZAR(junto a la ruta)
  //firma del metodo a invocar 
  //Instrucciones a Ejecutar 
  @Get("/prueba1")
  mensaje(): string { 
    return "Mensaje de Prueba 1"
   }

   @Get("/bootcamps/:id/curso/:cursoId")
   mensajeBootcampPrId(@Param("id") id:string, @Param("cursoId") cursoId:string ): string { 
     return `mostrando bootcamp con id: ${id} y el curso ${cursoId}`
    }
    @Get("Identificacion/:id")
    getIdentificacion(@Query("nombre") nombre : string, @Query("edad") edad:number, @Param("id") id:number,@Query("Ciudad") ciudad : string):Student{

      
       return new Student( id,nombre,edad,ciudad)


    }
    
}
