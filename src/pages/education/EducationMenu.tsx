import xbox from '../../assets/images/xbox.svg';
import windowsIcon from '../../assets/images/windows.svg';
import sony from '../../assets/images/sony.svg';
import router from '../../assets/images/router.svg';
import linux from '../../assets/images/linux.svg';
import ios from '../../assets/images/ios.svg';
import androindIcon from '../../assets/images/androidIcon.svg';
import apple from '../../assets/images/apple.svg';

const EducationMenu = () => {
  const images = [
    {
      image: apple,
      text: 'آموزش ios',
    },
    {
      image: sony,
      text: 'آموزش پلی استیشن',
    },
    {
      image: windowsIcon,
      text: 'آموزش ویندوز',
    },
    {
      image: androindIcon,
      text: 'آموزش اندروید',
      width: 'w-[76px]',
    },
    {
      image: xbox,
      text: 'آموزش ایکس باکس',
    },
    {
      image: router,
      text: 'آموزش روتر',
    },
    {
      image: linux,
      text: 'آموزش لینوکس',
    },
    {
      image: ios,
      text: 'آموزش ios',
    },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-10 title-1">
      {images.map((item, index) => (
        <div
          key={index}
          className="hoverable-div bg-[#ffffff18] rounded-2xl w-[280px] flex flex-col py-8 justify-between items-center gap-4 text-white
                     hover:bg-white hover:text-[#2D0172] transition duration-500"
        >
          {/* Ensure your image tag is set up to be styled by CSS */}
          <img src={item.image} alt={item.text} className="svg-image w-[76px] " />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationMenu;
