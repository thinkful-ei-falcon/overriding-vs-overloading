class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
        System.out.println(addNums(6, 7));
        System.out.println(addNums(6,7,8));
    }

    static Integer addNums(Integer a, Integer b ){
        System.out.println("Add 2 nums");
        return a+b;
    }

    static Integer addNums(Integer a, Integer b, Integer c ){
        System.out.println("Add 3 nums");
        return a+b+c;
    }
}