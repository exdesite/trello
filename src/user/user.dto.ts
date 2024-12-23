import { IsNumber, IsOptional, Min } from 'class-validator'

export class PomodoroSettingsDto {
    @IsOptional()
    @IsNumber()
    @Min(1)
    workInterval?: number
}