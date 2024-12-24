import {
	Body,
	Controller,
	HttpCode,
	UsePipes,
	ValidationPipe,
	Get,
	Put
	
} from '@nestjs/common'
import { CurrentUser } from 'src/auth/decorators/user.decorators'
import { UserDto } from './user.dto'
import { UserService } from './user.service'
import { Auth } from 'src/auth/decorators/auth.decorators'

@Controller('user/profile')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	@Auth()
	async profile(@CurrentUser('id') id: string) {
		return this.userService.getProfile(id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put()
	@Auth()
	async updateProfile(@CurrentUser('id') id: string, @Body() dto: UserDto) {
		return this.userService.update(id, dto)
	}
}
