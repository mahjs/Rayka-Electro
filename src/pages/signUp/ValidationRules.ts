export const usernameValidation = {
  required: 'نام کاربری الزامی است',
  minLength: {
    value: 4,
    message: 'نام کاربری باید حداقل 4 کاراکتر باشد',
  },
};

export const emailValidation = {
  required: 'ایمیل الزامی است',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'فرمت ایمیل نادرست است',
  },
};

export const passwordValidation = {
  required: 'کلمه عبور الزامی است',
  minLength: {
    value: 6,
    message: 'کلمه عبور باید حداقل 6 کاراکتر باشد',
  },
};

export const confirmPasswordValidation = (password: string) => ({
  validate: (value: string) => value === password || 'کلمه عبور با تکرار آن مطابقت ندارد',
});
