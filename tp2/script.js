function Factory() {

        this.createEmployee = function (type) {
            let employee;
     
            if (type.employee === "fulltime") {
                employee = new FullTime(type);
            } else if (type.employee === "parttime") {
                employee = new PartTime(type);
            } else if (type.employee === "temporary") {
                employee = new Temporary(type);
            }
     
            employee.type = type;
                
     
            return employee;
        }
    }
     
    const FullTime = function (parameter) {
        this.hourly = parameter.employeeMoney || "$12";
        this.sector = parameter.sector || "front line";
    };
     
    const PartTime = function (parameter) {
        this.hourly = parameter.employeeMoney || "$11";
        this.sector = parameter.sector || "front line";
    };
     
    const Temporary = function (parameter) {
        this.hourly = parameter.employeeMoney || "$10";
        this.sector = parameter.sector || "front line";
    };
     


      
        const factory = new Factory();
     
        const emp1 = factory.createEmployee(
            {
                employee:"fulltime",
                employeeMoney:"20",
                sector: "chofer"
            });

          const emp2 = factory.createEmployee(
            {
                employee:"parttime",
                employeeMoney:"40",
                sector: "archer"
            });


            const emp3 = factory.createEmployee(
            {
                employee:"temporary",
                //employeeMoney:"30"
                sector:"artillery"
            });

       
       
            console.log(emp1);
            console.log(emp2);
            console.log(emp3);
          
        
     
      