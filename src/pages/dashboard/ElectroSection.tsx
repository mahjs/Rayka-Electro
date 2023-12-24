import { useEffect, useState } from 'react';
import Phone from '../../assets/images/phone.webp';
import UnderlineCopyText from '../../components/ui/UnderlineCopyText';
import api from '../../services';
import { Dns } from '../../services/dns';
const ElectroSection = () => {
  const [dnses, setDnses] = useState<Dns[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    api.dns.getAllDns().then((data) => {
      setDnses(data.datas.results.dns);
      setLoading(false);
    });
  }, []);
  return (
    <div className="flex flex-col pt-6">
      <div className="flex lg:flex-row flex-col-reverse gap-4 justify-between ">
        <div className="flex basis-2/5 flex-col items-center lg:items-start justify-center gap-4	">
          <p className=" text-white header-1">
            دی‌ان‌اس <span className="text-[#8C39F3] ">الکترو</span>
          </p>

          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-white bg-[#ffffff18] backdrop-blur-[37px] rounded-lg border border-gray-300 "
            placeholder="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده"
          ></textarea>
          <div className="flex gap-4 body ">
            <UnderlineCopyText text={loading ? '1.1.1.1' : dnses[0].domain} />
            <UnderlineCopyText text={loading ? '2.2.2.2' : dnses[1].domain} />
          </div>
        </div>
        <div className="flex flex-col basis-3/5	">
          <img
            alt="phone"
            style={{
              transition: 'all 1s ease-out',
              objectFit: 'contain',
              maxHeight: '100dvh',
              maxWidth: '90%',
            }}
            src={Phone}
            className="rotateMagnifier"
          />
        </div>
      </div>
    </div>
  );
};

export default ElectroSection;
