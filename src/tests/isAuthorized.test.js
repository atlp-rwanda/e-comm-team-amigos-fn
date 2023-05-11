import { checkTokenValidity, getUserRole } from "../utils/auth/isAuthorized";

describe("IsAuthorized",()=>{
  describe("checkTokenValidity", () => {
    test("returns false for an invalid/expired token", () => {
      const expiredToken =" ..."; // Replace with an expired token
      const result = checkTokenValidity(expiredToken);
      expect(result).toBe(false);
    });
  
  });
  
  describe('getUserRole', () => {
    test('returns the user roles from local storage', () => {
      const user = { userRoles: ['Customer', 'Admin'] };
      localStorage.setItem('user', JSON.stringify(user));
  
      const result = getUserRole();
      expect(result).toEqual(['Customer', 'Admin']);
    });
  
    test('returns an empty array if user roles are not present', () => {
      localStorage.removeItem('user');
  
      const result = getUserRole();
      expect(result).toEqual([]);
    });
  
    // Add more test cases as needed
  });
});

