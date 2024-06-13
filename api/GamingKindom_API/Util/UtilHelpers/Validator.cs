using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Util.UtilHelpers
{
    public static class Validator
    {
        public static bool IsEntityValid<T>(T entity)
        {
            if (entity == null) return false;

            var properties = typeof(T).GetProperties(BindingFlags.Instance | BindingFlags.Public);

            foreach (var property in properties)
            {
                if (property.PropertyType == typeof(string))
                {
                    var value = (string)property.GetValue(entity);
                    if (string.IsNullOrWhiteSpace(value)) return false;
                }
                else if (property.PropertyType.IsClass)
                {
                    var value = property.GetValue(entity);
                    if (value == null) return false;
                }
            }

            return true;
        }
    }
}
