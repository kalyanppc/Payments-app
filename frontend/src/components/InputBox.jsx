export default function InputBox({label,placeholder,onChange}){
      return(
            <div>
                  <div className="text-sm font-medium text-left py-2">
                        {label}
                  </div>
                  <input placeholder={placeholder} onChange={onChange} className="border w-full px-2 py-1 rounded border-slate-200" />
            </div>
      )
}