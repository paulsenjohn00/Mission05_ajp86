using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AboutMeWebApp.Models
{
    public class GradeCalcModel
    {
        [Required]
        [Range(0, 100)]
        public int assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public int quizes { get; set; }
        [Required]
        [Range(0, 100)]
        public int groupProjects { get; set; }
        [Required]
        [Range(0, 100)]
        public int intex { get; set; }
        [Required]
        [Range(0, 100)]
        public int exams { get; set; }
        [Range(0,100)]
        public int extraCredit { get; set; }

    }
}
