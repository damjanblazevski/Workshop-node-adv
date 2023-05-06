import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class carQueryDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    example: "Mercedes - Benz",
    description: "Search by the brand of the car",
  })
  brand?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    example: "Black",
    description: "Search by the color of the car",
  })
  color?: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({
    type: Number,
    example: 2013,
    description: "Search by the year of the car",
  })
  year?: number;
}
