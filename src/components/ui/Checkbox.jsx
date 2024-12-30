import CheckImage from '../../../public/assets/images/logo/shop-logo-6.webp';
const Checkbox = ({ id, disabled, label, value, name, onChange, activeClass = 'ring-orange-500  bg-orange-500 dark:bg-slate-700 dark:ring-slate-700 ' }) => {
  return (
    <label className={`flex items-center ${disabled ? ' cursor-not-allowed opacity-50' : 'cursor-pointer'}`} id={id}>
      <input type="checkbox" className="hidden" name={name} checked={value} onChange={onChange} htmlFor={id} disabled={disabled} />
      <span
        className={`h-4 w-4 border flex-none border-slate-100 dark:border-slate-800 rounded 
        inline-flex ltr:mr-3 rtl:ml-3 relative transition-all duration-150
        ${value ? activeClass + ' ring-2 ring-offset-2 dark:ring-offset-slate-800 ' : 'bg-slate-100 dark:bg-slate-600 dark:border-slate-600'}
        `}
      >
        {value && <img src={CheckImage} alt="" className="h-[10px] w-[10px] block m-auto" />}
      </span>
      <span className="text-slate-500 dark:text-slate-400 text-sm leading-6 ml-4 capitalize">{label}</span>
    </label>
  );
};

export default Checkbox;
